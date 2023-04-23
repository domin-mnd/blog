import type { FunctionComponent, ReactElement } from "react";
import { container, text } from "./styles.css";
import { copyright, credentials } from "./config";

export const Footer: FunctionComponent = (): ReactElement => {
  return (
    <footer className={container}>
      <div className={text}>
        <span>{copyright}</span>
        <span>{credentials}</span>
      </div>
    </footer>
  );
};
