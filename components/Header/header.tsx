import Logo from '../Logo/logo';
import CTA from '../CTA/cta';

import style from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={style.header}>
      <Logo />
      <CTA text='Try' ctaType='link' href='/' logo />
    </header>
  );
}
