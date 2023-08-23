import { useEffect, useRef } from "react";
import drink from "../assets/pexels-farhad-ibrahimzade-5713766.jpg";
import { gsap } from "gsap";
const HeroSection = () => {
  const heading1 = useRef();
  const heading2 = useRef();
  const images = useRef();
  useEffect(() => {
    var loadTimeline = gsap.timeline();
    loadTimeline
      .to(images.current, {
        duration: 2,
        autoAlpha: 1,
        x: 0,
        delay: 0.2,
      })
      .to(heading1.current, {
        autoAlpha: 1,
        delay: 0.2,
        duration: 2,
      })
      .to(heading2.current, {
        autoAlpha: 1,
        delay: 0.2,
        duration: 1,
      });
  }, []);
  return (
    <div className="hero">
      <div className="text">
        <h1 ref={heading1}>
          Find <span>your</span>
        </h1>
        <h1 ref={heading2}>Best cocktail</h1>
      </div>
      <div ref={images} className="text2">
        <img src={drink} />
      </div>
    </div>
  );
};

export default HeroSection;
