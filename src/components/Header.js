import { Link } from "react-router-dom";

function Header({ logoSrc, logoAlt }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-header__brand" to="/">
          <img className="site-header__logo" src={logoSrc} alt={logoAlt} />
        </Link>

        <nav className="site-header__nav" aria-label="Primary Navigation">
          <ul className="site-header__menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order_online">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;