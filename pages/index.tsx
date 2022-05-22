import Link from 'next/link';
import FoldingInstructions from '../components/FoldingInstructions';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HtmlHead from '../components/HtmlHead';
import Navbar from '../components/Navbar';
import { useTranslations } from 'next-intl';
import nextConfig from '../next.config';

export const getStaticProps = async (params: any) => {
  return {
    props: {
      messages: (await import(`../messages/${params.locale}.json`)).default,
      locale: params.locale,
      languages: process.env.languages,
      routes: nextConfig.routes,
    },
  };
};

function Home(props: any) {
  const t = useTranslations('Pages.Home');
  const smoothScrollTo = (idName: String) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(`${idName}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
          <div className="column is-6-desktop is-8-tablet is-12-mobile has-text-centered">
            {/* STEP 1 */}
            <section className="section box step first odd">
              <h2>{t('steps.one.title')}</h2>
              {t
                .raw('steps.one.content.paragraphs')
                .map(function (value: any, key: any) {
                  return (
                    <p
                      className="mb-4"
                      key={`${key}`}
                      dangerouslySetInnerHTML={{ __html: value.description }}
                    ></p>
                  );
                })}
              <Link href="/anonymath.pdf" locale="">
                <a
                  className="button is-dark mb-5"
                  id="download"
                  target="_blank"
                >
                  {t('steps.one.download')}
                </a>
              </Link>
            </section>

            <div
              className="separator even"
              onClick={() => smoothScrollTo('step-2')}
            ></div>

            {/* STEP 2 */}
            <section className="section box-alt step" id="step-2">
              <h2>{t('steps.two.title')}</h2>
              <p className="mb-5">{t('steps.two.description')}</p>
              <FoldingInstructions />
            </section>

            <div
              className="separator"
              onClick={() => smoothScrollTo('step-3')}
            ></div>

            {/* STEP 3 */}
            <section className="section box step odd" id="step-3">
              <h2>{t('steps.three.title')}</h2>
              {t
                .raw('steps.three.content.paragraphs')
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

export default Home;
