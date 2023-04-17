import Link from "next/link";
import { Anek_Gujarati } from "next/font/google";
import Styles from "@/components/nav/nav.module.css";
import { FiUser, FiLogOut } from 'react-icons/fi'
import { useContext } from "react";
import { useRouter } from "next/router";
import { authContext } from "@/context/auth";
import Cookies from "js-cookie";

const anek = Anek_Gujarati({ subsets: ["latin"] });
export const Nav = () => {
  const { user, setUser } = useContext(authContext)
  const router = useRouter();

  const handleLogout = () => {
    // Remove the user token from the cookie and log out the user
    Cookies.remove('userToken')
    setUser(null)
    router.push('/')
  }
  return (
    <header className={Styles.header}>
    <nav className={Styles.nav}>
        <h1 className={`${Styles.logo} ${anek.className}`}>gradlink</h1>
        <ul className={Styles.menu_links}>
            <li><Link href="/job-boards">Find Jobs</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            {user && user.role === "recruiter" && <li><Link href="/post-jobs">Post job</Link></li>}
            <div className={Styles.dropdown}>
            <button className={Styles.account}><li><FiUser /></li></button>
                <div className={Styles.dropdown_content}>
                    <div><FiUser />Account</div>
                    <button className={Styles.logOut} onClick={handleLogout}><FiLogOut /> Sign out</button>
                </div>
           </div>
        </ul>
    </nav>
</header>
  );
};