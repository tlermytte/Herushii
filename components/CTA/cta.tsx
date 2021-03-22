import dynammic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';

import style from './cta.module.scss';

const Logo = dynammic(() => import('../Logo/logo'));

interface ctaLink {
  text: string;
  href: string;
  logo?: boolean;
}

interface ctaEmail {
  text: string;
  logo?: boolean;
  onClick?: () => void;
}

export function CTALink({ text, href, logo }: ctaLink): JSX.Element {
  return (
    <Link href={href}>
      <a id='link' className={style.cta}>
        {text}
        {logo && <Logo />}
      </a>
    </Link>
  );
}

export function CTAEmail({ text, logo, onClick }: ctaEmail): JSX.Element {
  const [form, setForm] = useState(() => 'close');
  return (
    <button
      id={form}
      className={style.email}
      onClick={() => setForm(form === 'close' ? 'open' : 'close')}
    ></button>
  );
}
