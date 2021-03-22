import style from './feature.module.scss';

interface Props {
  descrption: string;
  icon: JSX.Element | JSX.Element[];
}

export default function Feature({ descrption, icon }: Props): JSX.Element {
  return (
    <div className={style.container}>
      {icon}
      <p>{descrption}</p>
    </div>
  );
}
