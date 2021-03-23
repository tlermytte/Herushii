import Head from 'next/head';
import Header from 'components/Header/header';
import Footer from 'components/Footer/footer';
import Feature from 'components/Features/features';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Herushi</title>
      </Head>
      <Header />
      <Feature />
      {/* <main>
      {/* <article id='feature'>
            <h2>Create your diete</h2>
            <p>
              <span>Heru</span> helps you determine your food needs based on
              your <span>physical characteristics</span> and{' '}
              <span>professional activities.</span>
            </p>
          </article>
          <article id='feature'>
            <h2>We Provide you food</h2>
            <p>
              <span>Heru</span> create for you a <span>customizable</span> week
              plan based on: your diet, food seasonality, what you already eat
              and the food that you always has at your disposal. And Then we
              deliver you just what you needed
            </p>
          </article>
          <article id='feature'>
            <h2>Manage your food</h2>
          </article> */}
      {/* </main> */}
      <Footer />
    </div>
  );
}
