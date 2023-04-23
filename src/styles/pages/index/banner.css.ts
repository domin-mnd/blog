import { globalStyle, style } from "@vanilla-extract/css";

export const banner: string = style({
  position: "absolute",
  left: "-30%",

  userSelect: "none",

  "@media": {
    "screen and (max-width: 900px)": {
      display: "none",
    },
  },
});

globalStyle(`${banner} *`, {
  transition: "transform .3s",

  "@media": {
    "(prefers-reduced-motion)": {
      transitionProperty: "none",
    },
  },
});

globalStyle(`${banner}:hover *`, {
  transform: "translate(-20%)",
  transition: "transform .3s",

  "@media": {
    "(prefers-reduced-motion)": {
      transitionProperty: "none",
    },
  },
});
