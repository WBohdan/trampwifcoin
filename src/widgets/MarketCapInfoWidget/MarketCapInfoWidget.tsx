import { Carousel } from "@components";
import styles from "./MarketCapInfoWidget.module.scss";
import {
  trumpOnRocket1,
  trumpOnRocket2,
  trumpOnRocket3,
  trumpOnRocket4
} from "@images";

const MarketCapInfoWidget = () => {
  return (
    <>
      <div className={styles["marketCapInfoWidget"]}>
        <div className={styles["marketCapInfoWidget__row"]}>
          <div className={styles["marketCapInfoWidget__item"]}>
            <p className={styles["marketCapInfoWidget__itemTitle"]}>
              MAX SUPPLY
            </p>

            <div className={styles["marketCapInfoWidget__itemCount"]}>
              1000, 0000, 0000
            </div>
          </div>

          <div className={styles["marketCapInfoWidget__item"]}>
            <p className={styles["marketCapInfoWidget__itemTitle"]}>
              CIRCULATING SUPPLY
            </p>

            <div className={styles["marketCapInfoWidget__itemCount"]}>
              1000, 0000, 0000
            </div>
          </div>

          <div className={styles["marketCapInfoWidget__item"]}>
            <p className={styles["marketCapInfoWidget__itemTitle"]}>
              MARKET CAP
            </p>

            <div className={styles["marketCapInfoWidget__itemCount"]}>
              soon...
            </div>
          </div>
        </div>

        <div className={styles["marketCapInfoWidget__row"]}>
          <div className={styles["marketCapInfoWidget__item"]}>
            <p className={styles["marketCapInfoWidget__itemTitle"]}>
              CMC RANKING
            </p>

            <div className={styles["marketCapInfoWidget__itemCount"]}>
              soon...
            </div>
          </div>

          <div className={styles["marketCapInfoWidget__item"]}>
            <p className={styles["marketCapInfoWidget__itemTitle"]}>
              TOKEN HOLDERS
            </p>

            <div className={styles["marketCapInfoWidget__itemCount"]}>
              soon...
            </div>
          </div>
        </div>
      </div>
      <div className={styles["marketCapInfoWidget__carousel"]}>
        <Carousel
          images={[
            trumpOnRocket1,
            trumpOnRocket2,
            trumpOnRocket3,
            trumpOnRocket4
          ]}
        />
      </div>
    </>
  );
};

export default MarketCapInfoWidget;
