import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { useTranslations } from 'next-intl';
import github from '../public/github.svg';

export const getStaticProps = async (locale: any) => {
  return {
    props: {
      messages: (await import(`../messages/${locale.locale}.json`)).default,
      locale: locale,
      languages: process.env.languages,
    },
  };
};

function Contribute(props: any) {
  const t = useTranslations('Contribute');
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
              <p
                dangerouslySetInnerHTML={{ __html: t.raw('main.content.one') }}
              ></p>
              <p
                dangerouslySetInnerHTML={{ __html: t.raw('main.content.two') }}
              ></p>
              <p
                dangerouslySetInnerHTML={{
                  __html: t.raw('main.content.three'),
                }}
              ></p>
              <h3 className="is-size-4 is-family-serif mt-4">
                {t('main.content.translate.poeditor.title')}
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: t.raw('main.content.translate.poeditor.content'),
                }}
              ></p>
              <h3 className="is-size-4 is-family-serif mt-4">
                {t('main.content.translate.sourcecode.title')}
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: t.raw('main.content.translate.sourcecode.content'),
                }}
              ></p>
              <p className="mt-6 has-text-centered">
                <a
                  className="mx-2 image-link"
                  href="https://github.com/isfegu/anonymath"
                >
                  <Image src={github} alt="Github" height={50} width={50} />
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Contribute;
