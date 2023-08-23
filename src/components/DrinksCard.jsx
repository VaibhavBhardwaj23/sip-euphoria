const DrinksCard = ({ drink }) => {
  return (
    <div className="drinks">
      <div className="popular_image">
        <img src={drink.image} />
      </div>
      <div className="text_popular">
        <h2>{drink.title}</h2>
        <p>Level: {drink.difficulty}</p>
      </div>
    </div>
  );
};

export default DrinksCard;
