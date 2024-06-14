import { NavigationMenu } from "./components";
import Lottie from "react-lottie";
import { Element } from "react-scroll";

// assets
import trumpAnimation from "../../assets/animations/trump.json";

// styles
import styles from "./HeaderWidget.module.scss";

const HeaderWidget = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: trumpAnimation,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Element name="home">
      <div className={styles["headerWidget"]}>
        <NavigationMenu />

        <div className={styles["headerWidget__animation"]}>
          <Lottie options={defaultOptions} />
        </div>

        <div className={styles["headerWidget__title"]}>
          <h1>MISSED DOGEWIFHAT? DON'T MISS TRUMPWIFHAT!</h1>
        </div>

        <div className={styles["headerWidget__buttons"]}>
          <div
            onClick={() =>
              window.open(
                "https://raydium.io/swap/?inputMint=sol&outputMint=DmHrv1bAz8Kep7EBL82cmUjucJ5n7UUSdAj7tMMdAoLP",
                "_blank",
                "noopener"
              )
            }
          >
            BUY Token
            <i
              className="fa fa-chevron-right"
              aria-hidden={true}
              style={{ fontSize: 14, fontWeight: 400 }}
            ></i>
          </div>
          <div
            onClick={() =>
              window.open(
                "https://dexscreener.com/solana/DmHrv1bAz8Kep7EBL82cmUjucJ5n7UUSdAj7tMMdAoLP",
                "_blank",
                "noopener"
              )
            }
          >
            Chart{" "}
            <i
              className="fa fa-chevron-right"
              aria-hidden={true}
              style={{ fontSize: 14, fontWeight: 400 }}
            ></i>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default HeaderWidget;
