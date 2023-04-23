import { style } from "@vanilla-extract/css";

export const unstyledAnchor: string = style({
  appearance: "none",
  color: "initial",
  textDecoration: "none",

  ":hover": {
    opacity: 1,
  },
});
