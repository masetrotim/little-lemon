const testimonials = [
  {
    name: "Maria",
    rating: 5,
    image: "/icons_assets/maria.jpg",
    text: "The food was amazing and the service was excellent. I will definitely come back again",
  },
  {
    name: "John",
    rating: 4,
    image: "/icons_assets/john.jpg",
    text: "Great atmosphere and delicious Mediterranean dishes. Highly recommended",
  },
  {
    name: "Anna",
    rating: 5,
    image: "/icons_assets/anna.jpeg",
    text: "Little Lemon is my favorite restaurant in Chicago. Everything tastes fresh and authentic",
  },
  {
    name: "David",
    rating: 4,
    image: "/icons_assets/david.webp",
    text: "Friendly staff and really tasty food. Perfect place for a family dinner",
  },
];

function Stars({ value = 5 }) {
  return (
    <div className="tcard__stars" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={
            i < value
              ? "tcard__star tcard__star--full"
              : "tcard__star tcard__star--empty"
          }
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonials__inner">
        <h2 id="testimonials-title" className="testimonials__title">
          Testimonials
        </h2>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <article className="tcard" key={t.name}>
              <div className="tcard__content">
                <Stars value={t.rating} />

                <div className="tcard__top">
                  <img className="tcard__avatar" src={t.image} alt={t.name} />
                  <h3 className="tcard__name">{t.name}</h3>
                </div>

                <p className="tcard__quote">“{t.text}”</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
