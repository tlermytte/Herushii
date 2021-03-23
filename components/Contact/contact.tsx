import Title from 'components/Article/Title/title';

import style from './contact.module.scss';

export default function Contact(): JSX.Element {
  return (
    <section className={style.contact}>
      <object data='sapiens_contact_us.svg'></object>
      <form>
        <Title text="Let's talk" size='large' />
        <input type='name' placeholder='Name' />
        <input type='email' placeholder='E-mail' />
        <textarea placeholder='Message' />
        <button type='submit'>Send Message</button>
      </form>
    </section>
  );
}
