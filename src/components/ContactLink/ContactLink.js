import Icon from "../Icon";

import styles from './styles.module.scss';

const ContactLink = ({ icon, text, type, link }) => {
  let customLink;

  const removedPlus = text && text.replace('+', '');
  const removedSpaces = removedPlus && removedPlus.replaceAll(' ', '');

  if (type === 'mailto') customLink = `mailto:${text}`;
  if (type === 'whatsapp') customLink = `https://api.whatsapp.com/send?phone=${removedSpaces}`;
  if (type === 'external') customLink = link;

  return (
    <a className={styles.link} href={customLink} target="_blank" rel="noreferrer" >
      <div className={styles.linkContainer}>
        <Icon id={icon} />
        <span>{text}</span>
      </div>
    </a>
  )
};

export default ContactLink;