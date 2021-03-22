import Description from './Description/description';
import Title from './Title/title';
import { CTALink } from 'components/CTA/cta';

export type ArticleContent = {
  title: { text: string; size: 'large' | 'medium' };
  description: { text: string; size: 'large' | 'medium' };
  cta?: { text: string; href: string };
};

interface Props {
  content: ArticleContent;
  cta?: boolean;
}

export function Article({ content, cta }: Props): JSX.Element {
  return (
    <article>
      <Title text={content.title.text} size={content.title.size} />
      <Description
        text={content.description.text}
        size={content.description.size}
      />
      {cta && <CTALink text={content.cta.text} href={content.cta.href} />}
    </article>
  );
}
