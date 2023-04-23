import { rem } from "@util/units/rem";
import { globalStyle, style } from "@vanilla-extract/css";
import { theme } from "@theme/general";

export const root: string = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  paddingTop: rem(64),
  paddingBottom: rem(64),
  marginLeft: "auto",
  marginRight: "auto",

  minHeight: "100vh",
  maxWidth: rem(600),
  width: "90%",

  fontFamily: theme.fontFamily.content,
  fontWeight: theme.fontWeight.sm,
  color: theme.color.text,
  lineHeight: 1.77,
});

export const container: string = style({
  width: "100%",
  flexGrow: 1,
});

globalStyle(`${root} pre`, {
  fontFamily: theme.fontFamily.code,
});
