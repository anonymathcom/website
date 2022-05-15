import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Shared.Footer');
  return (
    <footer className="footer has-text-centered">
      <div className="is-size-6 mt-6">
        <div className="footer-links">
          <Link href="/contribute">
            <a className="contribute">{t('contribute')}</a>
          </Link>
          <Link href="/about">
            <a className="about">{t('about')}</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
