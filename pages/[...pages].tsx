import Footer from '../components/Footer';
import Header from '../components/Header';
import HtmlHead from '../components/HtmlHead';
import Navbar from '../components/Navbar';
import { useTranslations } from 'next-intl';
import nextConfig from '../next.config';
import { getPageName } from '../lib/locales';

export const getStaticPaths = async () => {
  return {
    paths: nextConfig.flatRoutes,
    fallback: false,
  };
};

export const getStaticProps = async (params: any) => {
  return {
    props: {
      messages: (await import(`../messages/${params.locale}.json`)).default,
      locale: params.locale,
      languages: process.env.languages,
      routes: nextConfig.routes,
      pageName: getPageName(
        params.locale,
        params.params.pages[0],
        nextConfig.routes,
        nextConfig.i18n.defaultLocale
      ),
    },
  };
};

function Page(props: any) {
  const t = useTranslations('Pages.' + props.pageName);
  return (
    <>
      <HtmlHead
        title={t('head.title')}
        description={t('head.meta.description')}
        languages={props.languages}
        currentLocale={props.locale}
      />

      <Navbar languages={props.languages} currentLocale={props.locale} />
      <Header />

      <main className="main container mt-5">
        <div className="columns is-mobile is-centered">
          <div className="column is-6-desktop is-8-tablet is-12-mobile">
            <section className="section box step first">
              <h2 className="has-text-centered">{t('main.title')}</h2>
              {t
                .raw('main.content.paragraphs')
                .map(function (value: any, key: any) {
                  return (
                    <p
                      className="mb-4"
                      key={`${key}`}
                      dangerouslySetInnerHTML={{ __html: value.description }}
                    ></p>
                  );
                })}
            </section>
          </div>
        </div>
      </main>

      <Footer currentLocale={props.locale} routes={props.routes} />
    </>
  );
}

export default Page;
