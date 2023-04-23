import { theme } from "@theme/general";
import { style } from "@vanilla-extract/css";

const padding: string = "1rem";

export const titleSpan: string = style({
  color: theme.color.text,
});

export const dateSpan: string = style({
  color: theme.color.textLight,
  fontSize: theme.fontSize.xs,
});

export const button: string = style({
  width: "100%",

  padding: theme.space.md,
  paddingLeft: theme.space.xl,
  paddingRight: theme.space.xl,

  display: "flex",
  justifyContent: "space-between",

  cursor: "pointer",
  borderRadius: theme.borderRadius.xl,

  transition: "background-color .5s",

  ":hover": {
    backgroundColor: theme.color.bgAlt,
    transition: "background-color .2s",
  },

  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      paddingLeft: 0,
      paddingRight: 0,

      ":hover": {
        backgroundColor: "transparent",
      },
    },
  },
});
