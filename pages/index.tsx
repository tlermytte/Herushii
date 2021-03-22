import Head from 'next/head';
import Header from '../components/Header/header';
import CTA from '../components/CTA/cta';

import style from '../styles/index.module.scss';

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Herushii</title>
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
            <CTA text={`How does it work?`} type='e-mail' />
          </div>
          <object data='/sapiens.svg' type='image/svg+xml'></object>
        </section>
        <section className={style.features}></section>
      </main>
    </div>
  );
}
