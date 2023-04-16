import Link from "next/link";
import Styles from "@/components/nav/nav.module.css"

export const AuthNav = () => {
    return (
      <header className={Styles.header}>
          <nav className={Styles.nav}>
              <h1 className={Styles.logo}>gradlink</h1>
              <ul className={Styles.menu_links}>
                  <li><Link href="/auth">Login</Link></li>
                  <li><Link href="/auth/signup" className={Styles.create_account}>Register</Link></li>
              </ul>
          </nav>
      </header>
    )
  };