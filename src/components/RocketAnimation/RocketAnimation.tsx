import { trumpWithFlags } from "@images";
import styles from "./RocketAnimation.module.scss";
import clsx from "clsx";
import Lottie from "react-lottie";

import spaceAnimation from "../../assets/animations/spaceAnimation1.json";
import { useEffect, useState } from "react";

interface IRocketAnimationProps {
  showRocketAnimation: boolean;
  setShowRocketAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

const RocketAnimation = ({ setShowRocketAnimation }: IRocketAnimationProps) => {
  const [startAnimation, setStartAnimation] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: spaceAnimation,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  useEffect(() => {
    setStartAnimation(true);
    setTimeout(() => {
      setStartAnimation(false);
      setTimeout(() => {
        setShowRocketAnimation(false);
      }, 300);
    }, 3000);
  }, []);

  return (
    <div className={styles["rocketAnimation"]}>
      <div
        className={clsx(styles["rocketAnimation__background"], {
          [styles["visible"]]: startAnimation
        })}
      >
        <Lottie options={defaultOptions} />
      </div>

      <img
        src={trumpWithFlags}
        alt="Rocket"
        className={clsx(styles["rocketAnimation__img"], {
          [styles["launched"]]: startAnimation
        })}
      />
    </div>
  );
};

export default RocketAnimation;
