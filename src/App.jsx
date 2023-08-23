import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import Popular from "./components/Popular";
import Home from "./pages/Home";
import Collection from "./section/Collection";
import Specials from "./section/Specials";
import CollectionPage from "./pages/CollectionPage";
import DrinkDetail from "./pages/DrinkDetail";
import useFetch from "./hooks/useFetch";

function App() {
  const { data } = useFetch();

  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home>
                <HeroSection />
                <Popular data={data.splice(0, 10)} />
                <Specials data={data.splice(20, 5)} />
                <Collection data={data.splice(30, 10)} />
              </Home>
            </>
          }
        />

        <Route
          path="/collection"
          element={<CollectionPage database={data} />}
        />
        <Route path="/drinks/:slug" element={<DrinkDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
