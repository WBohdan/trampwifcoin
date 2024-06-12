import clsx from "clsx";
import { Element } from "react-scroll";

// styles
import styles from "./RoadmapWidget.module.scss";

const RoadmapWidget = () => {
  return (
    <Element name="roadmap">
      <div className={styles["roadmapWrapper"]}>
        <h1 className={styles["roadmapTitle"]}>ROADMAP</h1>

        <div className={styles["fullRoadmap"]}>
          <div className={styles["roadmapWidget"]}>
            <div
              className={clsx(styles["roadmapWidget__block"], styles["left"])}
            >
              <div className={styles["left__block"]}>
                <p>✅ Launch of the project</p>
                <p>✅ DEX listing</p>
              </div>
            </div>
            <div className={styles["roadmapWidget__line"]}>
              <div className={styles["roadmapWidget__circle"]}>
                <div className={styles["rightLine"]} />
              </div>
            </div>
            <div
              className={clsx(styles["roadmapWidget__block"], styles["right"])}
            >
              <p className={styles["right__title"]}>Q2 2024</p>
            </div>
          </div>

          <div className={styles["roadmapWidget"]}>
            <div
              className={clsx(styles["roadmapWidget__block"], styles["left"])}
            >
              <p className={styles["left__title"]}>Q3 2024</p>
            </div>
            <div className={styles["roadmapWidget__line"]}>
              <div className={styles["roadmapWidget__circle"]}>
                <div className={styles["leftLine"]} />
              </div>
            </div>
            <div
              className={clsx(styles["roadmapWidget__block"], styles["right"])}
            >
              <div className={styles["right__block"]}>
                <p>Coinmarketcap</p>
                <p>CoinGecko</p>
                <p>Promotion</p>
                <p>CEX listing</p>
                <p>Social media marketing</p>
                <p>Community events</p>
                <p>Telegram game beta version</p>
              </div>
            </div>
          </div>

          <div className={styles["roadmapWidget"]}>
            <div
              className={clsx(styles["roadmapWidget__block"], styles["left"])}
            >
              <div className={styles["left__block"]}>
                <p>CEX listing</p>
                <p>Telegram game release</p>
              </div>
            </div>
            <div className={styles["roadmapWidget__line"]}>
              <div className={styles["roadmapWidget__circle"]}>
                <div className={styles["rightLine"]} />
              </div>
            </div>
            <div
              className={clsx(styles["roadmapWidget__block"], styles["right"])}
            >
              <p className={styles["right__title"]}>Q4 2024</p>
            </div>
          </div>

          <div className={styles["roadmapWidget"]}>
            <div
              style={{ paddingBottom: 0 }}
              className={clsx(styles["roadmapWidget__block"], styles["left"])}
            >
              <p className={styles["left__title"]}>Q1 2025</p>
            </div>
            <div className={styles["roadmapWidget__line"]}>
              <div className={styles["roadmapWidget__circle"]}>
                <div className={styles["leftLine"]} />
              </div>
            </div>
            <div
              style={{ paddingBottom: 0 }}
              className={clsx(styles["roadmapWidget__block"], styles["right"])}
            >
              <div className={styles["right__block"]}>
                <p>Cooperation with other Web3 projects</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["reducedRoadmap"]}>
          <div className={styles["roadmapWidget"]}>
            <div className={styles["roadmapWidget__line"]}>
              <div className={styles["roadmapWidget__circle"]}>
                <div className={styles["rightLine"]} />
              </div>
            </div>
            <div
              className={clsx(styles["roadmapWidget__block"], styles["right"])}
            >
              <p className={styles["right__title"]}>Q2 2024</p>

              <div className={styles["right__block"]}>
                <p>✅ Launch of the project</p>
                <p>✅ DEX listing</p>
              </div>
            </div>
          </div>

          <div className={styles["roadmapWidget"]}>
            <div className={styles["roadmapWidget__line"]}>
              <div className={styles["roadmapWidget__circle"]}>
                <div className={styles["rightLine"]} />
              </div>
            </div>
            <div
              className={clsx(styles["roadmapWidget__block"], styles["right"])}
            >
              <p className={styles["right__title"]}>Q3 2024</p>
              <div className={styles["right__block"]}>
                <p>Coinmarketcap</p>
                <p>CoinGecko</p>
                <p>Promotion</p>
                <p>CEX listing</p>
                <p>Social media marketing</p>
                <p>Community events</p>
                <p>Telegram game beta version</p>
              </div>
            </div>
          </div>

          <div className={styles["roadmapWidget"]}>
            <div className={styles["roadmapWidget__line"]}>
              <div className={styles["roadmapWidget__circle"]}>
                <div className={styles["rightLine"]} />
              </div>
            </div>
            <div
              className={clsx(styles["roadmapWidget__block"], styles["right"])}
            >
              <p className={styles["right__title"]}>Q4 2024</p>
              <div className={styles["right__block"]}>
                <p>CEX listing</p>
                <p>Telegram game release</p>
              </div>
            </div>
          </div>

          <div className={styles["roadmapWidget"]}>
            <div className={styles["roadmapWidget__line"]}>
              <div className={styles["roadmapWidget__circle"]}>
                <div className={styles["rightLine"]} />
              </div>
            </div>
            <div
              style={{ paddingBottom: 0 }}
              className={clsx(styles["roadmapWidget__block"], styles["right"])}
            >
              <p className={styles["right__title"]}>Q1 2025</p>
              <div className={styles["right__block"]}>
                <p>Cooperation with other Web3 projects</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["roadmapButtons"]}>
          <div>
            BUY Token{" "}
            <i
              className="fa fa-chevron-right"
              aria-hidden={true}
              style={{ fontSize: 14, fontWeight: 400 }}
            ></i>
          </div>
          <div>
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

export default RoadmapWidget;
