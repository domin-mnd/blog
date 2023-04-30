import { rem } from "@util/units/rem";
import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  space: {
    none: "0",
    xss: rem(1),
    xs: rem(2),
    sm: rem(4),
    md: rem(8),
    lg: rem(16),
    xl: rem(24),
    xxl: rem(36),
  },
  fontSize: {
    xs: rem(14),
    sm: rem(14.4),
    md: rem(15),
    lg: rem(16),
    xl: rem(18),
    xxl: rem(20),
  },
  fontWeight: {
    sm: "350",
    md: "440",
    lg: "700",
  },
  fontFamily: {
    content: "var(--font-literata)",
    code: "var(--font-fira-code)",
  },
  borderRadius: {
    none: "0",
    xs: rem(1),
    sm: rem(2),
    md: rem(4),
    lg: rem(8),
    xl: rem(12),
    circle: "50%",
  },
  color: {
    bg: "#fff",
    bgAlt: "#f4f4f4",
    text: "#3b3d40",
    textLight: "#676767",
    line: "#888",
    lineLight: "#ddd",
    selection: "#ffff8d",
  },
});

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  outline: "none",
});

globalStyle("::selection", {
  backgroundColor: theme.color.selection,
});

// Typography

globalStyle("a", {
  color: theme.color.text,

  textDecorationColor: theme.color.lineLight,
  textUnderlineOffset: rem(3),
  textDecorationThickness: rem(1),

  transition: "opacity .3s",

  "@media": {
    "(prefers-reduced-motion)": {
      transitionProperty: "none",
    },
  },
});

globalStyle("a:hover", {
  opacity: 0.75,

  "@media": {
    "(prefers-reduced-motion)": {
      transitionProperty: "none",
    },
  },
});

globalStyle("p", {
  marginBottom: rem(24),
  fontSize: theme.fontSize.md,
});

globalStyle("hr", {
  // Equivalent to appearance: none;
  color: "transparent",
  border: "none",

  width: rem(128),
  height: rem(1),
  backgroundColor: theme.color.lineLight,

  marginTop: rem(32),
  marginBottom: rem(32),
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  paddingTop: rem(24),
  paddingBottom: rem(24),
});

globalStyle("ul", {
  marginBottom: rem(24),
  fontSize: theme.fontSize.md,
  listStylePosition: "inside",
});

globalStyle("li:not(:last-child)", {
  marginBottom: rem(10),
});
