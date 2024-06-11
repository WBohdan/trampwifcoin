import { coingecko, coinmarketcap } from "@images";
import styles from "./PartnersWidget.module.scss";

const PartnersWidget = () => {
  return (
    <div className={styles["partnersWidget"]}>
      <p className={styles["partnersWidget__title"]}>Partners</p>

      <div className={styles["partnersWidget__images"]}>
        <img src={coingecko} />
        <img src={coinmarketcap} />
      </div>
    </div>
  );
};

export default PartnersWidget;
