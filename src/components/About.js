export default function About() {
  return (
    <section className="about" aria-labelledby="about-title">
      <div className="about__inner">
        <div className="about__content">
          <h2 id="about-title" className="about__title">Little Lemon</h2>
          <h3 className="about__subtitle">Chicago</h3>

          {/* ВОТ ОНА — подложка как в фигме */}
          <div className="about__card">
            <p className="about__text">
              Little Lemon is a family-owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>

            <p className="about__text">
              Our chefs use fresh ingredients and time-tested techniques to create
              dishes that celebrate authentic flavors.
            </p>
          </div>
        </div>

        <div className="about__media" aria-hidden="true">
  <div className="about__shot about__shot--back">
    <img src="/icons_assets/last_1.png" alt="" />
  </div>

  <div className="about__shot about__shot--front">
    <img src="/icons_assets/last_2.png" alt="" />
  </div>
</div>
      </div>
    </section>
  );
}
