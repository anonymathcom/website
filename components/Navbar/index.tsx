import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import ImageNextjs from '../../components/ImageNextjs';

export const getStaticProps = async (params: any) => {
  return {
    props: {
      messages: (await import(`../../messages/${params.locale}.json`)).default,
      locale: params.locale,
      languages: process.env.languages,
    },
  };
};

const Navbar = ({ languages, currentLocale }: any): any => {
  const t = useTranslations('Shared.Header');

  let [isActive, setisActive] = useState(false);
  const burgerHandler = () => {
    setisActive(!isActive);
  };

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          role="button"
          className={`navbar-burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
          onClick={burgerHandler}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarMenu"
        className={`navbar-menu ${isActive ? 'is-active' : ''}`}
      >
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link is-arrowless">
              <ImageNextjs
                id="theme-options"
                src="/theme.svg"
                width="28px"
                height="28px"
              />
            </a>

            <div className="navbar-dropdown is-right is-boxed">
              <Link href="/">
                <a
                  id="dark-option"
                  className={`navbar-item ${
                    theme == 'dark' ? 'is-active' : ''
                  }`}
                  onClick={() => {
                    setTheme('dark');
                  }}
                >
                  {t('themes.dark-mode')}
                </a>
              </Link>
              <Link href="/">
                <a
                  id="light-option"
                  className={`navbar-item ${
                    theme != 'dark' ? 'is-active' : ''
                  }`}
                  onClick={() => {
                    setTheme('light');
                  }}
                >
                  {t('themes.light-mode')}
                </a>
              </Link>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link is-arrowless">
              <ImageNextjs src="/language.svg" width="28px" height="28px" />
            </a>

            <div className="navbar-dropdown is-right is-boxed">
              {languages.map((language: any) => (
                <Link href="/" locale={language.iso} key={language.iso}>
                  <a
                    className={`navbar-item ${
                      currentLocale == language.iso ? 'is-active' : ''
                    }`}
                    onClick={burgerHandler}
                  >
                    {language.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
