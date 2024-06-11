import { Element } from "react-scroll";

// assets
import { TelegramIcon, TwitterIcon } from "@icons";

// styles
import styles from "./FooterWidget.module.scss";
import { favicon } from "@images";

const FooterWidget = () => {
  return (
    <>
      <div className={styles["footerWidget__blueWidget"]} />
      <Element name="join_us">
        <div className={styles["footerWidget"]}>
          <img src={favicon} />

          <div className={styles["footerWidget__icons"]}>
            <TelegramIcon width={40} height={40} color="black" />
            <TwitterIcon width={40} height={40} color="black" />
          </div>

          <p className={styles["footerWidget__site"]}>info@trumpwifcoin.pro</p>
        </div>
      </Element>
    </>
  );
};

export default FooterWidget;
