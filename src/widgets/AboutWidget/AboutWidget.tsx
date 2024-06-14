import { Element } from "react-scroll";

// styles
import styles from "./AboutWidget.module.scss";

const AboutWidget = () => {
  return (
    <Element name="about">
      <div className={styles["aboutWidget"]}>
        <p className={styles["aboutWidget__title"]}>ABOUT</p>

        <p className={styles["aboutWidget__subtitle"]}>
          Trumpwifhat, Trump Wif Coin
        </p>

        <p className={styles["aboutWidget__paragraph"]}>
          Embark on a new adventure with Trumpwifhat! 🌟 With the crypto world
          buzzing, our token offers a fresh perspective and a nod to Trump's
          iconic style. It's time to 'tip your hat' to innovation and embrace
          the future of finance. Join us as we pave the way for a digital
          revolution, fueled by the spirit of Trump and the power of blockchain.
          Get in on the action and wear your digital hat proudly as we journey
          towards a brighter, crypto-infused future! 🎩💎 #Trumpwifhat
          #CryptoAdventure #HatsofftoTrump
        </p>
      </div>

      <div
        className={styles["aboutWidget"]}
        style={{ backgroundColor: "white" }}
      >
        <div className={styles["aboutWidget__contractTitle"]}>
          Contract address:
        </div>
        <p className={styles["aboutWidget__contract"]}>
          DmHrv1bAz8Kep7EBL82cmUjucJ5n7UUSdAj7tMMdAoLP
        </p>
      </div>
    </Element>
  );
};

export default AboutWidget;
