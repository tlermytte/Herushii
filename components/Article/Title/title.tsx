import style from './title.module.scss';

interface Props {
  text?: string;
  size: 'large' | 'medium';
}

export default function Title({ text, size }: Props): JSX.Element {
  return (
    <h1 id={size} className={style.title}>
      {text}
    </h1>
  );
}
