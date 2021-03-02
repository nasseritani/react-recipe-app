import Favorite from "./Favorite";
import { BoxLoading } from "react-loadingg";
import Carousels from "./Carousel";

import { RecipeContext } from "./context/RecipeContext";
import { useContext } from "react";
import Footer from "./Footer";
import Contact from "./Contact";

export default function LandingPage() {
  const context = useContext(RecipeContext);

  return (
    <div>
      {context.loading ? (
        <BoxLoading />
      ) : (
        <div>
          <Carousels />
          <Favorite />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}
