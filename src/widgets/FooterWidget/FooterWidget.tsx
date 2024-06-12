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
            <div
              onClick={() =>
                window.open("https://t.me/soltrumpwif", "_blank", "noopener")
              }
            >
              <TelegramIcon width={40} height={40} color="black" />
            </div>

            <div
              onClick={() =>
                window.open(
                  "https://x.com/TrumpWifCoinSol",
                  "_blank",
                  "noopener"
                )
              }
            >
              <TwitterIcon width={40} height={40} color="black" />
            </div>
          </div>

          <p
            className={styles["footerWidget__site"]}
            onClick={() =>
              window.open(
                "https://trampwifcoin.vercel.app",
                "_blank",
                "noopener"
              )
            }
          >
            https://trampwifcoin.vercel.app
          </p>
        </div>
      </Element>
    </>
  );
};

export default FooterWidget;
