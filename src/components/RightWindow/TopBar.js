import { Box, Typography } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

const TopBar = () => {
  return (
    <Box
      sx={{
        height: "10.7%",
        borderBottom: "1px solid #469597",
      }}
    >
      <Box display="flex" alignItems="center" sx={{ pl: 2, height: "100%" }}>
        <AccountCircle sx={{ fontSize: 50 }} />
        <Typography pl={1}>Saakar K.C</Typography>
      </Box>
    </Box>
  );
};

export default TopBar;
