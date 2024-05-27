import clsx from "clsx";

// types
import { IButtonProps } from "../ui.types";

// styles
import styles from "./Button.module.scss";

const Button = ({
  disabled,
  loading,
  className,
  icon,
  text,
  onClick,
  ...rest
}: IButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    !disabled && !loading && !!onClick && onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(styles["button"], className)}
      {...rest}
    >
      {loading ? (
        <></>
      ) : (
        <>
          {icon}
          {text}
        </>
      )}
    </button>
  );
};

export default Button;
