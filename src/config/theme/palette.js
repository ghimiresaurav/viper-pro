export function themePalette(theme) {
  return {
    common: {
      black: "#000",
    },
    primary: {
      dark: theme.colors.primaryDark,
      main: theme.colors.primary,
      comp: theme.colors.orange,
    },
    gray: {
      main: theme.colors.gray,
      light: theme.colors.grayLight,
    },
  };
}
