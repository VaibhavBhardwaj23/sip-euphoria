import { useEffect, useRef } from "react";
import "./Special.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollContainer from "react-indiana-drag-scroll";
import DrinksCard from "../components/DrinksCard";
import arrow from "../assets/icons8-advance-24.png";
import { Link } from "react-router-dom";
const Collection = ({ data }) => {
  gsap.registerPlugin(ScrollTrigger);
  const text = useRef();
  const specials = useRef();

  useEffect(() => {
    const el = text.current;
    const el2 = specials.current;
    gsap.to(el, {
      autoAlpha: 1,
      x: 0,
      duration: 2,
      scrollTrigger: {
        trigger: el,
        start: "top center",
      },
    });

    gsap.to(el2, {
      autoAlpha: 1,
      y: 0,
      duration: 2,
      scrollTrigger: {
        trigger: el2,
        start: "top center",
      },
    });
  }, []);

  return (
    <>
      <div className="specials">
        <h1 ref={text}>Our Collection</h1>
        <div className="special_cards" ref={specials}>
          <ScrollContainer className="popular_drinks">
            {data &&
              data.map((drink) => {
                return (
                  <Link
                    className="Link"
                    key={drink.id}
                    to={`/drinks/${drink.id}`}
                  >
                    <DrinksCard drink={drink} />
                  </Link>
                );
              })}
          </ScrollContainer>
        </div>

        <Link className="Link forward" to={"/collection"}>
          <span>View All</span>
          <img className="arrow" src={arrow} />
        </Link>
      </div>
    </>
  );
};

export default Collection;

// <DrinksCard key={drink.id} drink={drink} />;
