import { Box, Button, OutlinedInput } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const BottomBar = () => {
  return (
    <Box
      sx={{
        height: "10.7%",
        width: "100%",
        bottom: 0,
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        p: "10px 20px",
      }}
    >
      <OutlinedInput placeholder="Aa" sx={{ width: "80%" }} />
      <Button variant="contained" endIcon={<SendRoundedIcon />}>
        Send
      </Button>
    </Box>
  );
};

export default BottomBar;
