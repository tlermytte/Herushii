import Head from 'next/head';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import { CTALink, CTAButton } from '../components/CTA/cta';

import style from '../styles/index.module.scss';

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Herushi</title>
      </Head>
      <Header />
      <main>
        <section className={style.presentation}>
          <div id='content'>
            <h1>Be Healthier, Easier !</h1>
            <p>
              Thanks to Heru, the AI that helps you in your diet, you will have
              all the keys in hand to adapt your diet to your needs!
            </p>
            <CTALink text='How does it work?' href='#features' />
          </div>
          <object data='/sapiens.svg' type='image/svg+xml'></object>
        </section>
        <section id='#features' className={style.features}>
          <article id='feature'>
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
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
