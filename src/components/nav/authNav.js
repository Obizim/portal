import Link from "next/link";
import Styles from "@/components/nav/nav.module.css";
import { FiUser, FiLogOut } from 'react-icons/fi'
import { useContext } from "react";
import { useRouter } from "next/router";
import { authContext } from "@/context/auth";
import Cookies from "js-cookie";

export const AuthNav = () => {
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
        <h1 className={Styles.logo}>gradlink</h1>
        <ul className={Styles.menu_links}>
            <Link href="/job-boards"><li>Find Jobs</li></Link>
            <Link href="/resources"><li>Resources</li></Link>
            {user && user.role === 'recruiter' && <Link href="/post-jobs"><li>Post job</li></Link>}
            <div className={Styles.dropdown}>
            <button className={Styles.account}><li><FiUser /></li></button>
                <div className={Styles.dropdown_content}>
                    <a href="#"><FiUser />Account</a>
                    <button className={Styles.logOut} onClick={handleLogout}><FiLogOut /> Sign out</button>
                </div>
           </div>
        </ul>
    </nav>
</header>
  );
};
