import { rem } from "@util/units/rem";
import { style } from "@vanilla-extract/css";

export const posts: string = style({
  display: "grid",
  gap: rem(8),
});
