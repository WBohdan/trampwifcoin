import { TelegramIcon, TwitterIcon } from "@icons";
import styles from "./FooterWidget.module.scss";

const FooterWidget = () => {
  return (
    <>
      <div className={styles["footerWidget__blueWidget"]} />
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

        {/* <TelegramIconInCircle />
      <TwitterIcon /> */}
      </div>
    </>
  );
};

export default FooterWidget;
