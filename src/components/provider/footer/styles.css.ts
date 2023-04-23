import { theme } from "@theme/general";
import { rem } from "@util/units/rem";
import { style } from "@vanilla-extract/css";

export const container: string = style({
  marginTop: rem(64),
  color: theme.color.textLight,
  fontSize: theme.fontSize.sm,
  width: "100%",

  ":before": {
    display: "block",
    content: "",
    backgroundColor: theme.color.lineLight,
    height: rem(1),
    width: rem(128),
    marginBottom: rem(32),
  },
});

export const text: string = style({
  display: "flex",
  justifyContent: "space-between",

  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
    },
  },
});
