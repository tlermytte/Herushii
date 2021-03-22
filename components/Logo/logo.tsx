import style from './logo.module.scss';

export default function Logo(): JSX.Element {
  return (
    <h1 id='logo' className={style.logo}>
      Herushi
    </h1>
  );
}
