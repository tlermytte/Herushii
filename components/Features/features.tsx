import { Article, ArticleContent } from 'components/Article/article';
import { CTA } from 'components/CTA/cta';
import { useState } from 'react';
import Image from 'next/image';

import style from './features.module.scss';
import shadow from 'styles/shadow.module.scss';
import fade from 'styles/fade.module.scss';

const diete: ArticleContent = {
  title: { text: 'Create your diete', size: 'medium' },
  description: {
    text:
      'Heru helps you in real time to determine your food needs based on your metabolism, your health, your physical and professional activities.',
    size: 'medium',
  },
};

const delivery: ArticleContent = {
  title: { text: 'Make a plan !', size: 'medium' },
  description: {
    text:
      'Heru create for you a customizable week plan based on: your diet, food seasonality, what you already eat and the food that you always has at your disposal. And Then we deliver you just what you needed',
    size: 'medium',
  },
};

const manage: ArticleContent = {
  title: { text: 'Manage your food', size: 'medium' },
  description: {
    text:
      'Heru keeps you informed of the food you still have at your disposal or the food close to the expiration date, thus avoiding the magnetic waste',
    size: 'medium',
  },
};

export default function Features(): JSX.Element {
  const [section, setSection] = useState<number>(() => 0);
  return (
    <div id='features' className={`${style.features} ${shadow.both}`}>
      <section className={style.features__visualisation}>
        {section === 0 && (
          <Image
            src='/CreateYourDiet.png'
            alt='create your diet'
            width={450}
            height={850.58}
            className={section !== 0 ? fade.fadeOut : fade.fadeIn}
          />
        )}
        {section === 1 && (
          <Image
            src='/PlanYourMeal.png'
            alt='plan your meal'
            width={450}
            height={850.58}
            className={section !== 1 ? fade.fadeOut : fade.fadeIn}
          />
        )}
        {section === 2 && (
          <Image
            src='/getDelivered.png'
            alt='get deliverd'
            width={450}
            height={850.58}
            className={section !== 2 ? fade.fadeOut : fade.fadeIn}
          />
        )}
      </section>
      <div className={style.features__description}>
        <section
          onClick={() => setSection(0)}
          className={section !== 0 ? fade.fadeOut : fade.fadeIn}
        >
          <Article content={diete} />
        </section>
        <section
          onClick={() => setSection(1)}
          className={section !== 1 ? fade.fadeOut : fade.fadeIn}
        >
          <Article content={delivery} />
        </section>
        <section
          onClick={() => setSection(2)}
          className={section !== 2 ? fade.fadeOut : fade.fadeIn}
        >
          <Article content={manage} />
        </section>
      </div>
    </div>
  );
}
