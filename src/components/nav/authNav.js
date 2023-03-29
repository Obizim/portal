import Link from "next/link";
import Styles from "@/components/nav/nav.module.css";
import { FiUser, FiLogOut } from 'react-icons/fi'
import { useContext } from "react";
import { authContext } from "@/context/auth";

export const AuthNav = () => {
  const { user } = useContext(authContext)
  return (
    <header className={Styles.header}>
    <nav className={Styles.nav}>
        <h1 className={Styles.logo}>gradlink</h1>
        <ul className={Styles.menu_links}>
            <Link href="/jobs"><li>Jobs</li></Link>
            <Link href="/jobs"><li>Resources</li></Link>
            {user.role === 'recruiter' && <Link href="/jobs"><li>Post job</li></Link>}
            <div class={Styles.dropdown}>
            <button className={Styles.account}><li><FiUser /></li></button>
                <div class={Styles.dropdown_content}>
                    <a href="#"><FiUser />Account</a>
                    <a href="#"><FiLogOut /> Sign out</a>
                </div>
           </div>
        </ul>
    </nav>
</header>
  );
};
