import Link from "next/link";
import Styles from "@/components/nav/nav.module.css";

export const AuthNav = () => {
  return (
    <header className={Styles.header}>
    <nav className={Styles.nav}>
        <h1 className={Styles.logo}>gradlink</h1>
        <ul className={Styles.menu_links}>
            <Link href="/jobs"><li>Jobs</li></Link>
            <Link href="/auth/signup"><li>My account</li></Link>
        </ul>
    </nav>
</header>
  );
};
