import { Article, ArticleContent } from 'components/Article/article';

import style from './features.module.scss';
import shadow from 'styles/shadow.module.scss';

const diete: ArticleContent = {
  title: { text: 'Create your diete', size: 'medium' },
  description: {
    text:
      'Heru helps you determine your food needs based on your physical characteristics and professional activities.',
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
  return (
    <div className={`${style.features} ${shadow.both}`}>
      <section>
        <Article content={diete} />
      </section>
      <section>
        <Article content={delivery} />
      </section>
      <section>
        <Article content={manage} />
      </section>
    </div>
  );
}
