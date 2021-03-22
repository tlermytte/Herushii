import Logo from '../Logo/logo';
import { CTAEmail } from '../CTA/cta';

import style from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={style.header}>
      <Logo />
      <CTAEmail text='Try' logo />
    </header>
  );
}
