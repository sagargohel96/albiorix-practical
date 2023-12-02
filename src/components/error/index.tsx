import React from "react";
import s from "./error.module.css";

interface ErrorProps {
  name: string;
}

export const Error: React.FC<ErrorProps> = ({ name }) => {
  return <div className={s.container}>{`*${name}`}</div>;
};
