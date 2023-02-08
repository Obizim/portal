import "./nav.css";

export const Nav = () => {
  return (
    <header>
        <nav className="nav">
            <h1 className="logo">gradlink</h1>

            <ul className="menu_links">
                <li>Find jobs</li>
                <li>Sign in</li>
            </ul>
        </nav>
    </header>
  )
};
