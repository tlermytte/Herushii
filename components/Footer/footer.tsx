import { Article, ArticleContent } from 'components/Article/article';
import { CTA } from 'components/CTA/cta';
import Logo from '../Logo/logo';
import Social from './Social/social';
import { Instagram, Twitter, Linkedin } from 'react-feather';

import shadow from 'styles/shadow.module.scss';
import style from './footer.module.scss';

const content: ArticleContent = {
  title: {
    text: 'Get a demo',
    size: 'large',
  },
  description: {
    text:
      'Be one of the first 100 users to get benefits and discounts on the application!',
    size: 'large',
  },
};

export default function Footer(): JSX.Element {
  return (
    <div id='footer' className={style.container}>
      <section className={style.contact}>
        <object data='sapiens_contact_us.svg'></object>
        <form>
          <Article content={content} />
          <input type='email' placeholder='E-mail' />
          <CTA type='button' buttonType='submit' text='Send Message' />
        </form>
      </section>
      <footer className={`${style.footer} ${shadow.top}`}>
        <Logo />
        <div id='social'>
          <Social href='/'>
            <Instagram />
          </Social>
          <Social href='/'>
            <Twitter />
          </Social>
          <Social href='/'>
            <Linkedin />
          </Social>
        </div>
      </footer>
    </div>
  );
}
