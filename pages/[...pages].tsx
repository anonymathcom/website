import Footer from '../components/Footer';
import Header from '../components/Header';
import HtmlHead from '../components/HtmlHead';
import Navbar from '../components/Navbar';
import { useTranslations } from 'next-intl';

export const getStaticPaths = async () => {
  return {
    paths: ['/es/amparo', '/es/antonia'],
    fallback: false, // false or 'blocking'
  };
};

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
  return (
    <>
      <h1>AMPARO</h1>
    </>
  );
}

export default About;
