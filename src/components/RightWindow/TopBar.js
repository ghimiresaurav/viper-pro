import { Box, Typography } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";

const TopBar = () => {
  const { room } = useContext(GlobalContext);
  return (
    <Box
      sx={{
        height: "10.7%",
        borderBottom: "1px solid #469597",
      }}
    >
      <Box display="flex" alignItems="center" sx={{ pl: 2, height: "100%" }}>
        <AccountCircle sx={{ fontSize: 50 }} />
        <Typography pl={1}>{room.name}</Typography>
      </Box>
    </Box>
  );
};

export default TopBar;
