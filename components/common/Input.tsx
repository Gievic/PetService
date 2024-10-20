import classNames from "classnames";
import styles from "./Input.module.scss";
import React from "react";


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className, ...props }: InputProps) => {
  return <input className={classNames(styles.input, className)} {...props} />;
};
export default Input;