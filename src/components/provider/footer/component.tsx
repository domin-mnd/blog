import type { FunctionComponent, ReactElement } from "react";
import { container, text } from "./styles.css";
import { copyright, credentials } from "./config";

/**
 * Footer component defined in a provider layout that includes legal information
 * @returns {ReactElement} Semantic tag with the copyright content
 */
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
