import clsx from "clsx";

// types
import { IAuthLayoutProps } from "../layouts.types";

// styles
import styles from "./AuthLayout.module.scss";

// assets
import { logo } from "../../assets/images";

const AuthLayout = ({ children, modalClassName }: IAuthLayoutProps) => {
  return (
    <div className={styles["authLayout"]}>
      <div className={styles["authLayout__logo-wrapper"]}>
        <img src={logo} alt="logo" />
      </div>
      <div className={clsx(styles["authLayout__modal"], modalClassName)}>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
