import { Link } from 'react-router-dom'
import "./nav.css";

export const Nav = () => {
  return (
    <header>
        <nav className="nav">
            <h1 className="logo">gradlink</h1>

            <ul className="menu_links">
                <Link to="/login"><li>Login</li></Link>
                <Link to="/signup" className='create-acount'><li>Create account</li></Link>
            </ul>
        </nav>
    </header>
  )
};
