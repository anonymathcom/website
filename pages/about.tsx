import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { useTranslations } from 'next-intl';

export const getStaticProps = async (locale: any) => {
  return {
    props: {
      messages: (await import(`../messages/${locale.locale}.json`)).default,
      locale: locale,
      languages: process.env.languages,
    },
  };
};

function About(props: any) {
  const t = useTranslations('About');
  return (
    <>
      <Head>
        <title>{t('head.title')}</title>
        <meta name="description" content={t('head.meta.description')} />
      </Head>

      <Navbar languages={props.languages} currentLocale={props.locale.locale} />
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
                      key={`${key}`}
                      dangerouslySetInnerHTML={{ __html: value.description }}
                    ></p>
                  );
                })}
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default About;
