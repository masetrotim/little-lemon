function Header({ logoSrc, logoAlt }) {
  return (
    <header className="site-header">
  <div className="site-header__inner">
    <a className="site-header__brand" href="/">
      <img className="site-header__logo" src={logoSrc} alt={logoAlt} />
    </a>

    <nav className="site-header__nav" aria-label="Primary Navigation">
      <ul className="site-header__menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order_online">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  </div>
</header>
  );
}

export default Header;