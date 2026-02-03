function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned
            Mediterranean restaurant,
            focused on traditional
            recipes served with a modern
            twist.
          </p>
          <button className="btn btn--primary">Reserve a Table</button>
        </div>

        {/* ВОТ ЭТОГО БЛОКА У ТЕБЯ НЕ ХВАТАЛО */}
        <div className="hero__media" aria-hidden="true">
          <img
            className="hero__img"
            src="/icons_assets/restauranfood.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
