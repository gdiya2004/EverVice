import { Carousel } from "../components/Carousel";
import FeatureProduct from "../components/FeatureProduct";
import {slides} from "../data/carouselData.json";

export const Home = () => {
  return (
    <>
      <section>
        <Carousel data={slides} />
        <FeatureProduct />
      </section>
    </>
  );
};