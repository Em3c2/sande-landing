import Link from "next/link"
import styles from "./styles.module.scss"
import Icon from "../Icon"

const Navbar = ({ color }) => (
  <nav className={styles.navbar}>
    <Link href="/">
      <a aria-label="Home">
        <Icon id='LogoNav' color={color} />
      </a>
    </Link>
    <ul className={`${styles.links} nav-text-${color}`}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/estudio">Estudio</Link>
      </li>
      <li>
        <Link href="/servicios">Servicios</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
      <li>
        <Link href="/contacto">Contacto</Link>
      </li>
    </ul>
  </nav>
)

export default Navbar
