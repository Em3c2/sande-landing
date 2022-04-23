import { useState } from "react";
import { push as Menu } from 'react-burger-menu';
import Link from "next/link"
import styles from "./styles.module.scss"
import Icon from "../Icon"

const Navbar = ({ color }) => {
  const [isOpen, toggleIsOpen] = useState(false)   

  return (
  <>
    <nav className={styles.navbarDesktop}>
      <Link href="/">
        <a aria-label="Home" className={styles.logo}>
          <Icon id='LogoNav' color={color} />
        </a>
      </Link>
      <ul className={`${styles.links} ${color === 'white' ? 'text-white' : 'text-black'}`}>
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
    <div className={styles.navbarMobile}>
      <Menu isOpen={isOpen} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <ul>
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
      </Menu>
        <Icon id='LogoNav' color="black" />
    </div>
  </>
)
}

export default Navbar
