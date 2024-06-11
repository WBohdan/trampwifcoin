import styles from "./Carousel.module.scss";
import { Carousel as RCarousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ICarouselProps {
  images: string[];
}

const Carousel = ({ images }: ICarouselProps) => {
  return (
    <div className={styles["carousel"]}>
      <RCarousel
        infiniteLoop={true}
        interval={3000}
        showThumbs={false}
        autoPlay={true}
      >
        {images.map((item) => {
          return (
            <div>
              <img src={item} />
            </div>
          );
        })}
        {/* <div>
          <img src={trumpOnRocket1} />
        </div>
        <div>
          <img src={trumpOnRocket2} />
        </div>
        <div>
          <img src={trumpOnRocket3} />
        </div> */}
      </RCarousel>
    </div>
  );
};

export default Carousel;
