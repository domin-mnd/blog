import type { ReactNode } from "react";

/** Page's title */
export const title: string = "Something is not right...";

/** A description to what has happened */
export const description: ReactNode = (
  <p>
    Page you are trying to open does not exist. You may have mistyped the
    address, or the page has been moved to another URL. If you think this is an
    error contact <a href="https://github.com/domin-mnd" target="_blank">me</a>.
  </p>
);

/** og:title meta tag */
export const ogTitle: string =
  "This is a 404 page. You may have mistyped the address!";

/** og:description meta tag */
export const ogDescription: string = [
  "Page you are trying to open does not exist.",
  "You may have mistyped the address, or the",
  "page has been moved to another URL. If you",
  "think this is an error contact support.",
].join(" ");
