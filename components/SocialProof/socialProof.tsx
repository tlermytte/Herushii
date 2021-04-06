import Description from 'components/Article/Description/description';

import style from './socialProof.module.scss';

const text =
  'We strive to offer you the best services by working with professionals in the field of dietetics, delivery service advocating the short circuit and local producers and primeurs';

export default function SocialProof(): JSX.Element {
  return (
    <section className={style.container}>
      <Description text={text} size='large' />
    </section>
  );
}
