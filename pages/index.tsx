import Head from 'next/head';
import Header from 'components/Header/header';
import Footer from 'components/Footer/footer';
import Features from 'components/Features/features';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Herushi</title>
      </Head>
      <Header />
      <Features />
      <Footer />
    </div>
  );
}
