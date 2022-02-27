import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";

const Navbar = ({ color }) => {
  const logoPath = `/images/logoNavbar-${color}.svg`

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>
        <Image src={logoPath} width="442px" height="20px" />
        </a>
      </Link>
      <ul className={`${styles.links} nav-text-${color}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Estudio</Link>
        </li>
        <li>
          <Link href="/">Servicios</Link>
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
        <li>
          <Link href="/">Contacto</Link>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;
