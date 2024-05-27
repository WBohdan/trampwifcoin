import { Button } from "@ui";
import styles from "./HeaderWidget.module.scss";
import { appLogo } from "@images";

const HeaderWidget = () => {
  return (
    <div className={styles["headerWidget"]}>
      <div className={styles["headerWidget__content"]}>
        <h1>Stickers Pack</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </p>
        <div className={styles["headerWidget__contentButton"]}>
          <Button text="Buy" />
        </div>
      </div>
      <img src={appLogo} />
    </div>
  );
};

export default HeaderWidget;
