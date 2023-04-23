import { theme } from "@theme/general";
import { rem } from "@util/units/rem";
import { style } from "@vanilla-extract/css";

export const title: string = style({
  color: theme.color.text,

  marginBottom: rem(16),

  transition: "opacity .3s",

  ":hover": {
    opacity: 0.75,

    transition: "opacity .3s",
  },
});
