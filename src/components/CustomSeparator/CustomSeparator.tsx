import clsx from "clsx";

// types
import { ICustomSeparatorProps } from "../components.types";

// styles
import styles from "./CustomSeparator.module.scss";

const CustomSeparator = ({ className, withText }: ICustomSeparatorProps) => {
  return (
    <div className={clsx(styles["customSeparator"], className)}>
      {withText && (
        <>
          <div className={styles["customSeparator__line"]} />
          <p>OR</p>
        </>
      )}

      <div className={styles["customSeparator__line"]} />
    </div>
  );
};

export default CustomSeparator;
