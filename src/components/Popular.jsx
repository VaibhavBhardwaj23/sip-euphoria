import ScrollContainer from "react-indiana-drag-scroll";
import "./Popular.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DrinksCard from "./DrinksCard";
import { Link } from "react-router-dom";

const Popular = ({ data }) => {
  gsap.registerPlugin(ScrollTrigger);
  const popular = useRef();
  useEffect(() => {
    const el = popular.current;
    gsap.to(el, {
      autoAlpha: 1,
      x: 0,
      duration: 2,
      scrollTrigger: {
        trigger: el,
        start: "top center",
      },
    });
  }, []);

  return (
    <div ref={popular} className="popular">
      <h2>Most popular</h2>
      <ScrollContainer className="popular_drinks">
        {data &&
          data.map((drink) => {
            return (
              <Link className="Link" key={drink.id} to={`/drinks/${drink.id}`}>
                <DrinksCard drink={drink} />
              </Link>
            );
          })}
      </ScrollContainer>
    </div>
  );
};

export default Popular;
