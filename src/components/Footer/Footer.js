import styles from "./styles.module.scss";
import Icon from "../Icon";

const Footer = ({ email, phone, direction, sentence }) => (
  <footer className={styles.conteiner}>
    <div className={styles.logosContainer}>
      <Icon id="LogoFooter" className={styles.logoFooter} />
      <div className={styles.logoAndCaption}>
        <Icon id='LogoNav' />
        <p className={styles.sentence}>{sentence}</p>
      </div>
    </div>
    <div className={styles.conteinerContact}>
      <div className={styles.contact}>
        <p>{phone}</p>
        <p className={styles.email}>{email}</p>
        <p>{direction}</p>
      </div>
      <div className={styles.conteinerSocialMedia}>
        <div className={styles.boxSocialMedia}>
          <a href="https://www.linkedin.com/company/estudio-sande/"  target="_blank" rel="noreferrer" >
            <Icon id="Linkedin" />
          </a>
          <a href="https://twitter.com/EstudioSande?s=20&t=pOwuf1VZMXaTwqrtM_RGSQ"  target="_blank" rel="noreferrer">
            <Icon id="Twitter" />
          </a>
          <a href="https://www.instagram.com/estudio.sande/"  target="_blank" rel="noreferrer">
            <Icon id="Instagram" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
