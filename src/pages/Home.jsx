// import { useEffect, useState } from "react";

import "./Home.css";
const Home = ({ children }) => {
  //   const [screenSize, setScreenSize] = useState(getCurrentDimension());

  //   function getCurrentDimension() {
  //     return window.innerWidth;
  //   }

  //   useEffect(() => {
  //     const updateDimension = () => {
  //       setScreenSize(getCurrentDimension());
  //     };
  //     window.addEventListener("resize", updateDimension);

  //     return () => {
  //       window.removeEventListener("resize", updateDimension);
  //     };
  //   }, [screenSize]);

  //   console.log(screenSize);

  return <div className="homePage">{children}</div>;
};

export default Home;
