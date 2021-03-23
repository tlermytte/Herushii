import Link from 'next/link';
import { useState } from 'react';

import style from './cta.module.scss';

interface ctaLink {
  text: string;
  href: string;
}

export function CTALink({ text, href }: ctaLink): JSX.Element {
  return (
    <Link href={href}>
      <a id='link' className={style.cta}>
        {text}
      </a>
    </Link>
  );
}

interface Email {
  value: string;
  status?: 'close' | 'open' | 'end';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function CTAEmail({
  value,
  status,
  onChange,
  handleSubmit,
}: Email): JSX.Element {
  const [form, setForm] = useState(() =>
    status !== undefined ? status : 'close'
  );
  return (
    <div id={form} className={style.email}>
      <button type='button' onClick={() => setForm('open')}>
        Try Herushi
      </button>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='email'
          value={value}
          onChange={onChange}
          placeholder='E-mail'
        />
        <button
          type='submit'
          className={style.cta}
          onClick={() => setForm('end')}
        >
          send
        </button>
      </form>
      <p>Thank you!</p>
    </div>
  );
}
