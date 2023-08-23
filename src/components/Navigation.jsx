import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const logo = useRef();
  const links1 = useRef();

  const links3 = useRef();
  useEffect(() => {
    var loadTimeline = gsap.timeline();
    loadTimeline
      .to(logo.current, {
        duration: 2,
        autoAlpha: 1,
        delay: 0.2,
      })
      .to(links1.current, {
        duration: 0.5,
        delay: 0.3,
        y: 0,
        autoAlpha: 1,
      })

      .to(links3.current, {
        duration: 0.5,
        delay: 0.5,
        y: 0,
        autoAlpha: 1,
      });
  }, []);

  return (
    <div className="navBar">
      <h1 ref={logo} className="logo">
        <Link className="Link" to={"/"}>
          Sip Euphoria
        </Link>
      </h1>
      <Link className="Link" to={"/"}>
        <p ref={links1}>Home</p>
      </Link>

      <Link className="Link" to="/collection">
        <p ref={links3}>Collections</p>
      </Link>
    </div>
  );
};

export default Navigation;
