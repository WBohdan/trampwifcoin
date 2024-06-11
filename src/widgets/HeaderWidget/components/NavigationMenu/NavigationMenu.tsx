import { useState } from "react";
import { scroller } from "react-scroll";

// assets
import { TelegramIcon } from "@icons";

// styles
import styles from "./NavigationMenu.module.scss";

const NavigationMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const animationOptions = {
    duration: 300,
    delay: 100,
    smooth: true
  };
  const scrollToHome = () => {
    scroller.scrollTo("home", animationOptions);
  };
  const scrollToAbout = () => {
    scroller.scrollTo("about", animationOptions);
  };
  const scrollToTokenomics = () => {
    scroller.scrollTo("tokenomics", animationOptions);
  };
  const scrollToRoadmap = () => {
    scroller.scrollTo("roadmap", animationOptions);
  };

  return (
    <div className={styles["navigation"]}>
      <div className={styles["navigation__menu"]}>
        <div onClick={scrollToHome}>Home</div>
        <div onClick={scrollToAbout}>About</div>
        <div onClick={scrollToTokenomics}>Tokenomics</div>
        <div onClick={scrollToRoadmap}>Roadmap</div>
      </div>

      <div className={styles["navigation__navBar"]}>
        <div
          onClick={toggleMenu}
          className={styles["navigation__navBarBurger"]}
        >
          <span />
          <span />
          <span />
        </div>

        {showMenu && (
          <div className={styles["navigation__navBarContent"]}>
            <div onClick={scrollToHome}>Home</div>
            <div onClick={scrollToAbout}>About</div>
            <div onClick={scrollToTokenomics}>Tokenomics</div>
            <div onClick={scrollToRoadmap}>Roadmap</div>
          </div>
        )}
      </div>

      <a>
        Join Telegram <TelegramIcon width={20} height={20} color="#4943AC" />
      </a>
    </div>
  );
};

export default NavigationMenu;
