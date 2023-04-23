import { hero } from "./styles.css";
import type { FunctionComponent, PropsWithChildren, ReactElement } from "react";

export const Hero: FunctionComponent<PropsWithChildren> = ({
  children,
}): ReactElement => {
  return <div className={hero}>{children}</div>;
};
