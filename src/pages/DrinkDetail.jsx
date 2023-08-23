import { useParams } from "react-router-dom";
import "./DrinkDetail.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useSearch } from "../hooks/useSearch";
// const recipe = {
//   id: "45",
//   title: "Aperol spritz",
//   difficulty: "Easy",
//   portion: "Serves 6-8",
//   time: "Hands-on time 5 min",
//   description:
//     "Get into the spirit of summer with this classic Italian recipe. Chilled prosecco and Aperol come together to create the beloved Aperol spritz.",
//   ingredients: [
//     "750ml bottle of prosecco",
//     "Bag of ice",
//     "Bottle of Aperol",
//     "Bottle of soda water",
//     "Slice of orange",
//   ],
//   method: [
//     {
//       "Step 1": "Chill the bottle of prosecco and Aperol in the fridge.",
//     },
//     {
//       "Step 2":
//         "Fill 6 or 8 wine glasses or tall tumblers with a couple of ice cubes and roughly three parts prosecco to one part Aperol.",
//     },
//     {
//       "Step 3":
//         "Add a splash of soda water and a slice of orange. Serve straightaway so that the fizz stays lively.",
//     },
//   ],
//   image: "https://apipics.s3.amazonaws.com/coctails_api/45.jpg",
// };

const DrinkDetail = () => {
  const { slug } = useParams();
  const { recipe, ingredients, method } = useSearch(slug);
  console.log(ingredients);
  const detailimage = useRef();
  const detail = useRef();

  useEffect(function () {
    gsap.to(detailimage.current, {
      autoAlpha: 1,
      x: 0,
      duration: 2,
    });
    gsap.to(detail.current, {
      autoAlpha: 1,
      x: 0,
      duration: 2,
    });
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  console.log(slug);
  return (
    // <h1>h1</h1>
    <>
      {recipe && (
        <div className="drink_detail">
          <div ref={detailimage} className="detail_image">
            <img src={recipe.image} />
          </div>
          <div ref={detail} className="detail">
            <h1 className="detail_title">{recipe.title}</h1>
            <span className="difficulty">{recipe.difficulty}</span>
            <div className="box">
              <h3 className="ingredient">Ingredients</h3>
              {ingredients &&
                ingredients.map((ingredient) => {
                  return (
                    <p className="ingredient_p" key={ingredient}>
                      •{ingredient}
                    </p>
                  );
                })}
            </div>
            <div className="box">
              <h3>Method</h3>
              {method &&
                method.map((method) => {
                  const stepNumber = Object.keys(method)[0];
                  const stepDescription = method[stepNumber];
                  return (
                    <p key={stepNumber}>
                      <span className="number">{stepNumber}</span>..............
                      {stepDescription}
                    </p>
                  );
                })}
            </div>
            <h3>Description</h3>
            <p>{recipe.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default DrinkDetail;
