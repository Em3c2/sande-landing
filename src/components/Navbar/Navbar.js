import { useState } from "react";
import { slide as Menu } from 'react-burger-menu';
import Link from "next/link"
import styles from "./styles.module.scss"
import Icon from "../Icon"

const Navbar = ({ color }) => {
  const [isOpen] = useState(false)

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
        <Menu
          isOpen={isOpen}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          customCrossIcon={<Icon id='CloseButton' />}
        >
          <ul className={styles.linksListMobile}>
            <Link href="/">
              <li>
                Home
              </li>
            </Link>

            <Link href="/estudio">
              <li>
                Estudio
              </li>
            </Link>

            <Link href="/servicios">
              <li>
                Servicios
              </li>
            </Link>

            <Link href="/blog">
              <li>
                Blog
              </li>
            </Link>

            <Link href="/contacto">
              <li>
                Contacto
              </li>
            </Link>
          </ul>
        </Menu>
        <Icon id='LogoNav' color="black" />
      </div>
    </>
  )
}

export default Navbar
