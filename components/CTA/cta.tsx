import Link from 'next/link';
import { useState } from 'react';

import style from './cta.module.scss';

interface Email {
  value: string;
  status?: 'close' | 'open' | 'end';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

interface Props {
  type: 'button' | 'link';
  text: string;
  href?: string;
  buttonType?: 'button' | 'submit';
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export function CTA({
  type,
  buttonType,
  text,
  href,
  onClick,
}: Props): JSX.Element {
  return (
    <>
      {type === 'button' && (
        <button
          id='button'
          className={style.cta}
          type={buttonType}
          onClick={onClick}
        >
          {text}
        </button>
      )}
      {type === 'link' && (
        <Link href={href}>
          <a id='link' className={style.cta}>
            {text}
          </a>
        </Link>
      )}
    </>
  );
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
        Notify me
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
          className={`${style.submit} ${style.cta}`}
          onClick={() => setForm('end')}
        >
          send
        </button>
      </form>
      <p>Thank you!</p>
    </div>
  );
}
