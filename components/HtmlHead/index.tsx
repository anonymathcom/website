import Head from 'next/head';
import logo from '../../public/logo.svg';
import { useRouter } from 'next/router';

const HtmlHead = ({
  currentLocale,
  title,
  description,
  routes,
  deployPath,
}: any) => {
  const router = useRouter();
  const basePath = deployPath;

  const hrefLang: any[] = [];
  const result_hrefLang = Object.entries(routes).map((route: any) => {
    if (router.asPath === '/') {
      hrefLang.push({
        locale: route[0],
        path:
          route[0] === router.defaultLocale
            ? basePath + router.asPath
            : basePath + '/' + route[0] + router.asPath,
      });
    } else {
      hrefLang.push({
        locale: route[0],
        path:
          route[0] === router.defaultLocale
            ? basePath + route[1].Contribute
            : basePath + route[1].Contribute,
      });
    }
  });

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="robots" content="index, follow" />
      {/* <!-- Search Engine --> */}
      <meta name="description" content={description} />
      <meta name="image" content={basePath + logo.src} />
      {/* <!-- Schema.org for Google --> */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={basePath + logo.src} />
      {/* <!-- Twitter --> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={basePath + logo.src} />
      {/* <!-- Open Graph general --> */}
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={basePath + logo.src} />
      {/* <meta name="og:url" content={url} /> */}
      <meta name="og:site_name" content="Anonymath" />
      <meta name="og:locale" content={currentLocale} />
      <meta name="og:type" content="website" />

      {hrefLang?.map((hrefLang: any) => (
        <link
          rel="alternate"
          hrefLang={hrefLang.locale}
          href={hrefLang.path}
          key={hrefLang.locale}
        />
      ))}
    </Head>
  );
};

export default HtmlHead;
