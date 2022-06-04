import Link from 'next/link';
import { useTranslations } from 'next-intl';
import ImageNextjs from '../../components/ImageNextjs';

const Header = () => {
  const t = useTranslations('Shared.Header');
  return (
    <header className="header has-text-centered">
      <h1 className="title">
        <Link href="/">
          <a>
            <span className="brand">Anonymath</span>
            <ImageNextjs src="/logo.svg" width="400px" height="80px" />
            {/*<Image src={logo} alt="anonymath" width={400} height={80} />*/}
          </a>
        </Link>
      </h1>
      <div className="block">
        <p className="subtitle is-size-3">{t('subtitle')}</p>
      </div>
    </header>
  );
};

export default Header;
