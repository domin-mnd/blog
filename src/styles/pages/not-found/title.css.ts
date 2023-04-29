import { theme } from "@theme/general";
import { style } from "@vanilla-extract/css";

export const title: string = style({
  color: theme.color.text,

  transition: "opacity .3s",

  ":hover": {
    opacity: 0.75,

    transition: "opacity .3s",
  },
});
