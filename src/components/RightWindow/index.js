import { Box } from "@mui/material";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";
import MessageField from "./MessageField";

const RightWindow = () => {
  return (
    <Box
      sx={{
        width: "80%",
        height: "100%",
        position: "relative",
      }}
    >
      <TopBar />
      <MessageField></MessageField>
      <BottomBar />
    </Box>
  );
};

export default RightWindow;
