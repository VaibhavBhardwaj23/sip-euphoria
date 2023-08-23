import { useEffect, useRef } from "react";
import "./Special.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollContainer from "react-indiana-drag-scroll";
import DrinksCard from "../components/DrinksCard";
import { Link } from "react-router-dom";
const Specials = ({ data }) => {
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
        <h1 ref={text}>Discover Specials</h1>
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
      </div>
    </>
  );
};

export default Specials;
