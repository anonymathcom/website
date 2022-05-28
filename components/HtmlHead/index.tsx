import Head from 'next/head';
import { useRouter } from 'next/router';
import logo from '../../public/logo.svg';

const HtmlHead = ({ title, description, currentLocale, languages }: any) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="index, follow" />
      {/* <!-- Search Engine --> */}
      <meta name="description" content={description} />
      <meta name="image" content={logo.src} />
      {/* <!-- Schema.org for Google --> */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={logo.src} />
      {/* <!-- Twitter --> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={logo.src} />
      {/* <!-- Open Graph general --> */}
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={logo.src} />
      {/* <meta name="og:url" content={url} /> */}
      <meta name="og:site_name" content="Anonymath" />
      <meta name="og:locale" content={currentLocale} />
      <meta name="og:type" content="website" />
      {languages.map((language: any) => (
        <link
          rel="alternate"
          hrefLang={language.iso}
          href={`${language.iso}${router.asPath}`}
          key={language.iso}
        />
      ))}
    </Head>
  );
};

export default HtmlHead;
