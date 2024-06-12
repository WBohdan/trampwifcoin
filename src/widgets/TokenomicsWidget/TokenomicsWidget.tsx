import { PieChart } from "react-minimal-pie-chart";
import { Element } from "react-scroll";

// components
import { Carousel } from "@components";

// styles
import styles from "./TokenomicsWidget.module.scss";
import {
  trumpOnRocket5,
  trumpOnRocket6,
  trumpOnRocket7,
  trumpOnRocket8
} from "@images";

const TokenomicsWidget = () => {
  return (
    <Element name="tokenomics">
      <div
        className={styles["tokenomicsWidget"]}
        style={{ backgroundColor: "#f7f7f7" }}
      >
        <h1>TOKENOMICS</h1>

        <div className={styles["tokenomicsWidget__button"]}>
          See Wallet{" "}
          <i
            className="fa fa-chevron-right"
            aria-hidden={true}
            style={{ fontSize: 14, fontWeight: 400 }}
          ></i>
        </div>
      </div>

      <div className={styles["tokenomicsWidget__carousel"]}>
        <Carousel
          images={[
            trumpOnRocket5,
            trumpOnRocket6,
            trumpOnRocket7,
            trumpOnRocket8
          ]}
        />
      </div>

      <div className={styles["tokenomicsWidget__buttonsRow"]}>
        <div>
          <p>Token info</p>
          <div className={styles["tokenomicsWidget__button"]}>
            Check here{" "}
            <i
              className="fa fa-chevron-right"
              aria-hidden={true}
              style={{ fontSize: 14, fontWeight: 400 }}
            ></i>
          </div>
        </div>

        <div>
          <p>Buy here</p>
          <div className={styles["tokenomicsWidget__button"]}>
            Buy here{" "}
            <i
              className="fa fa-chevron-right"
              aria-hidden={true}
              style={{ fontSize: 14, fontWeight: 400 }}
            ></i>
          </div>
        </div>
      </div>

      <div className={styles["tokenomicsWidget"]}>
        <div className={styles["tokenomicsWidget__circle"]}>
          <PieChart
            data={[
              { title: "Liquidity", value: 75, color: "#E38627" },
              { title: "Development/Marketing", value: 20, color: "#C13C37" },
              { title: "Team/treasury", value: 5, color: "#6A2135" },
              { title: "Exchanges", value: 5, color: "#F3CE5E" }
            ]}
          />
        </div>

        <div className={styles["tokenomicsWidget__progresses"]}>
          <div className={styles["tokenomicsWidget__item"]}>
            <div
              style={{ background: "#E38627" }}
              className={styles["tokenomicsWidget__itemCircle"]}
            />
            <p> Liquidity - 75% </p>
          </div>
          <div className={styles["tokenomicsWidget__item"]}>
            <div
              style={{ background: "#C13C37" }}
              className={styles["tokenomicsWidget__itemCircle"]}
            />
            <p> Development/Marketing - 15% </p>
          </div>
        </div>

        <div className={styles["tokenomicsWidget__progresses"]}>
          <div className={styles["tokenomicsWidget__item"]}>
            <div
              style={{ background: "#6A2135" }}
              className={styles["tokenomicsWidget__itemCircle"]}
            />
            <p> Team/treasury - 5% </p>
          </div>
          <div className={styles["tokenomicsWidget__item"]}>
            <div
              style={{ background: "#F3CE5E" }}
              className={styles["tokenomicsWidget__itemCircle"]}
            />
            <p> Exchanges - 5% </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default TokenomicsWidget;
