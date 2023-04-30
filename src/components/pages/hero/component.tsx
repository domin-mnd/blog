import { hero } from "./styles.css";
import type { FunctionComponent, PropsWithChildren, ReactElement } from "react";

/**
 * Hero component used for defining contents of the static non-post pages
 * @param {React.ReactNode} param.children Children components that are aligned depending on the viewport width
 * @returns {ReactElement} A display flex container
 */
export const Hero: FunctionComponent<PropsWithChildren> = ({
  children,
}): ReactElement => {
  return <div className={hero}>{children}</div>;
};
