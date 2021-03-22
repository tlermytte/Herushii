import Logo from 'components/Logo/logo';
import { CTAEmail } from 'components/CTA/cta';
import { Article, ArticleContent } from 'components/Article/article';

import shadow from '../../styles/shadow.module.scss';
import style from './header.module.scss';

const intro: ArticleContent = {
  title: { text: 'Be Healthier, Easier !', size: 'large' },
  description: {
    text:
      'Thanks to Heru, the AI that helps you in your diet, you will have all the keys in hand to adapt your diet to your needs!',
    size: 'large',
  },
  cta: { text: 'How does it work?', href: '#features' },
};

export default function Header(): JSX.Element {
  return (
    <header className={`${style.header} ${shadow.bottom}`}>
      <nav className={shadow.bottom}>
        <Logo />
        <CTAEmail text='Try' logo />
      </nav>
      <section>
        <Article content={intro} cta />
        <object data='/sapiens.svg' type='image/svg+xml'></object>
      </section>
    </header>
  );
}
