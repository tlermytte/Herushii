import Link from 'next/link';
import style from './social.module.scss';

interface Props {
  href: string;
  children: JSX.Element;
}

export default function Social({ href, children }: Props): JSX.Element {
  return (
    <Link href={href}>
      <a className={style.social}>{children}</a>
    </Link>
  );
}
