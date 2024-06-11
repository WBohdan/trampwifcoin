import styles from "./StickerPacksWidget.module.scss";

const StickerPacksWidget = () => {
  return (
    <div className={styles["stickerPacksWidget"]}>
      <p className={styles["stickerPacksWidget__title"]}>Memes</p>

      <div className={styles["stickerPacksWidget__content"]}>
        <div className={styles["stickerPacksWidget__item"]}></div>
        <div className={styles["stickerPacksWidget__item"]}></div>
        <div className={styles["stickerPacksWidget__item"]}></div>
        <div className={styles["stickerPacksWidget__item"]}></div>
        <div className={styles["stickerPacksWidget__item"]}></div>
        <div className={styles["stickerPacksWidget__item"]}></div>
        <div className={styles["stickerPacksWidget__item"]}></div>
        <div className={styles["stickerPacksWidget__item"]}></div>
      </div>
    </div>
  );
};

export default StickerPacksWidget;
