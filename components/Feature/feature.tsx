import style from './feature.module.scss';

interface Props {
  title?: string;
  reverse?: 'reverse' | 'noreverse';
  shadow?: 'top' | 'bottom';
  children?: JSX.Element | JSX.Element[];
}

export default function Feature({
  title,
  reverse,
  shadow,
  children,
}: Props): JSX.Element {
  return (
    <section
      className={`${style.feature} ${
        shadow === 'top' ? style.top : style.bottom
      }`}
      id={reverse}
    >
      <article>
        <h2>{title}</h2>
        {children}
      </article>
    </section>
  );
}
