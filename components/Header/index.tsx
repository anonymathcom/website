import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import logo from '../../public/logo.svg';
import ImageExplicitWidthAndHeight from '../../components/ImageExplicitWidthAndHeight';

const Header = () => {
  const t = useTranslations('Shared.Header');
  return (
    <header className="header has-text-centered">
      <h1 className="title">
        <Link href="/">
          <a>
            <span className="brand">Anonymath</span>
            <ImageExplicitWidthAndHeight
              id="img-logo"
              src={logo}
              width={400}
              height={80}
              alt="anonymath"
            />
            {/*<Image
              id="img-logo"
              src={logo}
              alt="anonymath"
              width={400}
              height={80}
              onLoadingComplete={(imageDimension) => {
                document
                  .getElementById('img-logo')
                  ?.setAttribute('width', '' + imageDimension.naturalWidth);
                document
                  .getElementById('img-logo')
                  ?.setAttribute('height', '' + imageDimension.naturalHeight);
              }}
            />*/}
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
