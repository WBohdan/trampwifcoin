import { ElementType, useState } from "react";
import clsx from "clsx";

// types
import { ITextfieldProps } from "../ui.types";

// icons
import { EyeClosed, EyeOpen } from "@icons";

// styles
import styles from "./Textfield.module.scss";

const Textfield = ({
  className,
  textfieldClassName,
  label,
  placeholder,
  error,
  isPassword = false,
  isTextarea = false,
  countChars = 0,
  maxLength = 300,
  ...rest
}: ITextfieldProps) => {
  const Tag = (isTextarea ? "textarea" : "input") as ElementType;

  const isLabel = label;

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisible = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className={className}>
      {isLabel ? <div className={styles.textfield__label}>{label}</div> : null}

      <label className={clsx(styles.textfield, textfieldClassName)}>
        <Tag
          type={isPassword && !passwordVisible ? "password" : "text"}
          className={clsx(
            styles.textfield__main,
            {
              [styles["textfield__main--input-label"]]: isLabel
            },
            {
              [styles["textfield__main--textarea"]]: isTextarea
            },
            {
              [styles["textfield__main--error"]]: !!error
            },
            {
              [styles["textfield__main--password"]]: isPassword
            }
          )}
          placeholder={placeholder}
          maxLength={isTextarea ? maxLength : null}
          {...rest}
        />
        {isPassword ? (
          <button
            className={styles["textfield__show-password"]}
            type="button"
            onMouseDown={togglePasswordVisible}
          >
            {passwordVisible ? <EyeOpen /> : <EyeClosed />}
          </button>
        ) : null}
        {isTextarea ? (
          <div className={styles["textfield__limit"]}>
            {maxLength - countChars} characters left
          </div>
        ) : null}
      </label>
      {error && <div className={styles["textfield__error"]}>{error}</div>}
    </div>
  );
};

export default Textfield;
