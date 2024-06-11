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
        {/* <p
          className={styles["aboutWidget__paragraph"]}
          style={{ marginBottom: "20px" }}
        >
          🚀TrumpWifHat's launch via TonRaffles Launchpad has oficially
          finished!
        </p>

        <p className={styles["aboutWidget__paragraph"]}>
          🎉 We're thrilled to announce that the authority of our token smart
          contract has been revoked, ensuring transparency and security for all.
          Plus, our team and marketing development tokens are locked, providing
          further proof of our commitment to the project's success.
        </p> */}
        {/* 
        <div className={styles["aboutWidget__buttons"]}>
          <div className={styles["aboutWidget__button"]}>Authority revoked</div>
          <div className={styles["aboutWidget__buttonLarge"]}>
            LP tokens locked
          </div>
          <div className={styles["aboutWidget__button"]}>Tokens Locked</div>
        </div> */}

        <div className={styles["aboutWidget__contractTitle"]}>
          Contact address:
        </div>
        <p className={styles["aboutWidget__contract"]}>
          EQDV3cbziPHz8wEcDYt-9iDOomlc3bFZQSx0WiZFCv7fh7oX
        </p>
      </div>
    </Element>
  );
};

export default AboutWidget;
