import Image from 'next/image';
import Link from 'next/link';
import language from '../../public/language.svg';
import { useState } from 'react';

const Navbar = ({ languages, currentLocale }: any): any => {
  let [isActive, setisActive] = useState(false);
  const burgerHandler = () => {
    setisActive(!isActive);
  };

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
              <Image src={language} alt="language" />
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
