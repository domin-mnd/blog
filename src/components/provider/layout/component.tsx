import type { FunctionComponent, PropsWithChildren, ReactElement } from "react";
import { Fira_Code, Literata } from "next/font/google";
import { Footer } from "@component/provider/footer";
import { container, root } from "./styles.css";

const firaCode = Fira_Code({
  display: "swap",
  subsets: ["cyrillic", "latin"],
  variable: "--font-fira-code",
});
const literata = Literata({
  display: "swap",
  subsets: ["cyrillic", "latin", "cyrillic-ext", "latin-ext"],
  variable: "--font-literata",
});

export const Layout: FunctionComponent<PropsWithChildren> = ({
  children,
}): ReactElement => (
  <>
    <style jsx global>{`
      :root {
        --font-literata: ${literata.style.fontFamily};
        --font-fira-code: ${firaCode.style.fontFamily};
      }
    `}</style>
    <div className={root}>
      <main className={container}>{children}</main>
      <Footer />
    </div>
  </>
);
