import style from './description.module.scss';

interface Props {
  text: string;
  size: 'large' | 'medium';
}

export default function Description({ text, size }: Props): JSX.Element {
  return (
    <p id={size} className={style.description}>
      {text}
    </p>
  );
}
