import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import classNames from "classnames";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rounded?: boolean;
  small?: boolean;
  large?: boolean;
  // size: "small" | "medium" | "large" TODO
}


const Button = ({
  className,
  rounded,
  small,
  large,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        styles.button,
        rounded && styles.rounded,
        small && styles.small,
        large && styles.large,
        className
      )}
      {...props}
      >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  rounded: PropTypes.bool,
};

export default Button;