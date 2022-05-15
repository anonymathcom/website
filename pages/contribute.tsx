import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HtmlHead from '../components/HtmlHead';
import Navbar from '../components/Navbar';
import { useTranslations } from 'next-intl';
import github from '../public/github.svg';

export const getStaticProps = async (params: any) => {
  return {
    props: {
      messages: (await import(`../messages/${params.locale}.json`)).default,
      locale: params.locale,
      languages: process.env.languages,
    },
  };
};

function Contribute(props: any) {
  const t = useTranslations('Pages.Contribute');
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
                      className="mb-6"
                      key={`${key}`}
                      dangerouslySetInnerHTML={{ __html: value.description }}
                    ></p>
                  );
                })}
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
