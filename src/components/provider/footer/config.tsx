import type { ReactNode } from "react";

export const copyright: ReactNode = `© ${new Date().getFullYear()} Kamil S.`;

export const credentials: ReactNode = (
  <>
    Illustrations by{" "}
    <a
      href="https://humanities.studio/"
      target="_blank"
      referrerPolicy="no-referrer"
    >
      Levi and Lily Nunnink
    </a>
    .
  </>
);
