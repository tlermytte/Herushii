import dynammic from 'next/dynamic';

import style from './cta.module.scss';

const Logo = dynammic(() => import('../Logo/logo'));

interface Props {
  text: string;
  type: 'social' | 'e-mail' | 'button';
  logo?: boolean;
  buttonType?: 'button' | 'submit';
  onClick?: () => void;
}

export default function CTA({
  text,
  type,
  logo,
  buttonType,
  onClick,
}: Props): JSX.Element {
  return (
    <button className={style.cta} onClick={onClick} type={buttonType}>
      {text}
      {logo && <Logo />}
    </button>
  );
}
