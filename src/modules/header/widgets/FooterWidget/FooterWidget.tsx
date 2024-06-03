import { Element } from "react-scroll";

// assets
import { TelegramIcon, TwitterIcon } from "@icons";

// styles
import styles from "./FooterWidget.module.scss";

const FooterWidget = () => {
  return (
    <>
      <div className={styles["footerWidget__blueWidget"]} />
      <Element name="join_us">
        <div className={styles["footerWidget"]}>
          <div>
            <p className={styles["footerWidget__title"]}>Join us</p>
            <p className={styles["footerWidget__subtitle"]}>
              Embrace the unconventional and embark on an enthralling journey
              guided by the $TRAMP meme token, traversing the captivating
              landscapes of the crypto universe!
            </p>
          </div>
          <div className={styles["footerWidget__socialMedia"]}>
            <TelegramIcon width={50} height={40} />
            <TwitterIcon />
          </div>
        </div>
      </Element>
    </>
  );
};

export default FooterWidget;
