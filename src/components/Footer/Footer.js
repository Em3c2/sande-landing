import styles from "./styles.module.scss";
import Icon from "../Icon";

const Footer = ({ email, phone, direction, sentence }) => (
  <div className={styles.conteiner}>
    <div className={styles.logoFooter}>
      <Icon id="LogoFooter" />
      <p className={styles.sentence}>{sentence}</p>
    </div>
    <div className={styles.conteinerContact}>
      <div className={styles.contact}>
        <p>{phone}</p>
        <p className={styles.email}>{email}</p>
        <p>{direction}</p>
      </div>
      <div className={styles.conteinerSocialMedia}>
        <div className={styles.boxSocialMedia}>
        <Icon id="Linkedin" href="https://www.linkedin.com/" />
        <Icon id="Facebook" href="https://www.facebook.com/" />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
