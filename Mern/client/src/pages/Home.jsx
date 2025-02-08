import { Carousel } from "../components/Carousel";
import {slides} from "../data/carouselData.json";

export const Home = () => {
  return (
    <>
        <section>
         <Carousel data={slides}/>
      </section>
    </>
  );
};