import dynammic from 'next/dynamic';

import style from './cta.module.scss';

const Link = dynammic(() => import('next/link'));
const Logo = dynammic(() => import('../Logo/logo'));

interface Props {
  text: string;
  ctaType: 'button' | 'link';
  logo?: boolean;
  buttonType?: 'button' | 'submit';
  href?: string;
  onClick?: () => void;
}

export default function CTA({
  text,
  ctaType,
  logo,
  buttonType,
  href,
  onClick,
}: Props): JSX.Element {
  return (
    <div className={style.cta}>
      {ctaType === 'link' ? (
        <Link href={href}>
          <a href={href}>
            {text}
            {logo && <Logo />}
          </a>
        </Link>
      ) : (
        <button onClick={onClick} type={buttonType}>
          {text}
          {logo && <Logo />}
        </button>
      )}
    </div>
  );
}
