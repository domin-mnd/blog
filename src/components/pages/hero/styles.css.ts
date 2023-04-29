import { rem } from "@util/units/rem";
import { style } from "@vanilla-extract/css";

export const hero: string = style({
  position: "relative",
  display: "flex",
  gap: rem(16),
  marginTop: rem(64),

  "@media": {
    "screen and (max-width: 900px)": {
      flexDirection: "column",
    },
  },
});
