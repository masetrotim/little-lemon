const specials = [
  {
    title: "Greek salad",
    price: "$12.99",
    image: "/icons_assets/greek salad.jpg",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
  },
  {
    title: "Bruschetta",
    price: "$5.99",
    image: "/icons_assets/bruschetta.jpg",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    image: "/icons_assets/lemon dessert.jpg",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
  }
];

function Specials() {
  return (
    <section className="specials">
      <div className="specials__inner">
        <div className="specials__top">
          <h2 className="specials__title">This weeks specials!</h2>
          <button className="btn btn--primary">Online Menu</button>
        </div>

        <div className="specials__grid">
          {specials.map((item) => (
            <article className="card" key={item.title}>
              <img className="card__img" src={item.image} alt={item.title} />

              <div className="card__body">
                <div className="card__head">
                  <h3 className="card__title">{item.title}</h3>
                  <span className="card__price">{item.price}</span>
                </div>

                <p className="card__text">{item.description}</p>

                <a
        href="/order_online"
        className="btn btn--primary card__cta"
        >
        Order a delivery 🚚
        </a>

        
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;
