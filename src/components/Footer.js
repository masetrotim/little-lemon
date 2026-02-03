function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand" aria-label="Little Lemon">
          <img
            className="site-footer__logo"
            src="/icons_assets/Vector.png"
            alt="Little Lemon logo"
          />
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__title">Navigation</h3>
          <ul className="site-footer__list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order_online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__title">Contact</h3>
          <ul className="site-footer__list">
            <li><span>Address</span></li>
            <li><span>Phone number</span></li>
            <li><span>Email</span></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__title">Social Media</h3>
          <ul className="site-footer__list">
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
