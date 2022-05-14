import Head from 'next/head';
import Link from 'next/link';
import FoldingInstructions from '../components/FoldingInstructions';
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

function Home(props: any) {
  const t = useTranslations('Home');

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
      <Head>
        <title>
          {t('head.title')} - {t('head.meta.description')}
        </title>
        <meta name="description" content={t('head.meta.description')} />
      </Head>

      <Navbar languages={props.languages} currentLocale={props.locale.locale} />

      <Header />

      <main className="main container mt-5">
        <div className="columns is-mobile is-centered">
          <div className="column is-6-desktop is-8-tablet is-12-mobile has-text-centered">
            {/* STEP 1 */}
            <section className="section box step first odd">
              <h2>{t('steps.one.title')}</h2>

              <Link href="/anonymath.pdf" locale="">
                <a
                  className="button is-dark mb-5"
                  id="download"
                  target="_blank"
                >
                  {t('steps.one.download')}
                </a>
              </Link>
              <p>{t('steps.one.no-print')}</p>
            </section>

            <div
              className="separator even"
              onClick={() => smoothScrollTo('step-2')}
            ></div>

            {/* STEP 2 */}
            <section className="section box step even" id="step-2">
              <h2>{t('steps.two.title')}</h2>
              <p>{t('steps.two.description')}</p>
            </section>

            <div
              className="separator"
              onClick={() => smoothScrollTo('step-3')}
            ></div>

            {/* STEP 3 */}
            <section className="section box-alt step" id="step-3">
              <h2>{t('steps.three.title')}</h2>
              <p className="mb-5">{t('steps.three.description')}</p>
              <FoldingInstructions />
            </section>

            <div
              className="separator"
              onClick={() => smoothScrollTo('step-4')}
            ></div>

            {/* STEP 4 */}
            <section className="section box step odd" id="step-4">
              <h2>{t('steps.four.title')}</h2>
              <p>{t('steps.four.description')}</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Home;
