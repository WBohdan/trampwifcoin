import { appLogo } from "@images";
import styles from "./StickerPacksWidget.module.scss";

const StickerPacksWidget = () => {
  return (
    <div className={styles["stickerPacksWidget"]}>
      <p className={styles["stickerPacksWidget__title"]}>Stickers Packs</p>

      <div className={styles["stickerPacksWidget__content"]}>
        <div className={styles["stickerPacksWidget__item"]}>
          <img src={appLogo} />
        </div>
        <div className={styles["stickerPacksWidget__item"]}>
          <img src={appLogo} />
        </div>
        <div className={styles["stickerPacksWidget__item"]}>
          <img src={appLogo} />
        </div>
        <div className={styles["stickerPacksWidget__item"]}>
          <img src={appLogo} />
        </div>
        <div className={styles["stickerPacksWidget__item"]}>
          <img src={appLogo} />
        </div>
        <div className={styles["stickerPacksWidget__item"]}>
          <img src={appLogo} />
        </div>
        <div className={styles["stickerPacksWidget__item"]}>
          <img src={appLogo} />
        </div>
        <div className={styles["stickerPacksWidget__item"]}>
          <img src={appLogo} />
        </div>
      </div>
    </div>
  );
};

export default StickerPacksWidget;
