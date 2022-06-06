import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import logo from '../../public/logo.svg';

const Header = () => {
  const t = useTranslations('Shared.Header');
  return (
    <header className="header has-text-centered">
      <h1 className="title">
        <Link href="/">
          <a>
            <span className="brand">Anonymath</span>
            <Image src={logo} alt="anonymath" width={400} height={80} />
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
