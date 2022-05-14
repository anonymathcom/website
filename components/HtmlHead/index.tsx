import Head from 'next/head';
import logo from '../../public/logo.svg';

const HtmlHead = ({ currentLocale, title, description }: any) => {
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
    </Head>
  );
};

export default HtmlHead;
