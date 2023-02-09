import { Link } from 'react-router-dom'
import "./nav.css";

export const Nav = () => {
  return (
    <header>
        <nav className="nav">
            <h1 className="logo">gradlink</h1>

            <ul className="menu_links">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Create account</Link></li>
            </ul>
        </nav>
    </header>
  )
};
