import Logo from '../Logo/logo';
import Social from '../Social/social';
import { Instagram, Twitter, Linkedin } from 'react-feather';

import shadow from 'styles/shadow.module.scss';
import style from './footer.module.scss';

export default function Footer(): JSX.Element {
  return (
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
  );
}
