import Link from "next/link";
import Styles from "@/components/nav/nav.module.css"
import { useContext } from "react";
import { authContext } from "@/context/auth";

export const Nav = () => {
    const {auth} = useContext(authContext)
    return (
      <header>
          <nav className={Styles.nav}>
              <h1 className={Styles.logo}>gradlink</h1>
              <ul className={Styles.menu_links}>
                  <Link href="/auth"><li>Login</li></Link>
                  <Link href="/auth/signup" className={Styles.create_account}><li>Create account</li></Link>
              </ul>
          </nav>
      </header>
    )
  };