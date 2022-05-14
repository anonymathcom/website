import Footer from '../components/Footer';
import Header from '../components/Header';
import HtmlHead from '../components/HtmlHead';
import Navbar from '../components/Navbar';
import { useTranslations } from 'next-intl';

export const getStaticProps = async (params: any) => {
  return {
    props: {
      messages: (await import(`../messages/${params.locale}.json`)).default,
      locale: params.locale,
      languages: process.env.languages,
    },
  };
};

function About(props: any) {
  const t = useTranslations('About');
  return (
    <>
      <HtmlHead
        currentLocale={props.locale}
        title={t('head.title')}
        description={t('head.meta.description')}
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
                      key={`${key}`}
                      dangerouslySetInnerHTML={{ __html: value.description }}
                    ></p>
                  );
                })}
            </section>
            <section className="section box step">
              {t.raw('main.content.tech').map(function (value: any, key: any) {
                return (
                  <p
                    className="mb-4 is-size-6"
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
