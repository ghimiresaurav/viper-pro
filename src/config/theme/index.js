import { createTheme } from "@mui/material/styles";
import colors from "./colors";
import { themePalette } from "./palette";

export const themeOption = {
  colors,
};

const theme = () => {
  return createTheme({
    direction: "ltr",
    palette: themePalette(themeOption),
    components: {
      MuiListItemButton: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              backgroundColor: themeOption.colors.orange,
            },
            "&.Mui-selected :hover": {
              backgroundColor: themeOption.colors.orange,
            },
          },
        },
      },
    },
  });
};

export default theme;
