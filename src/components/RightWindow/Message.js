import { Box, Typography } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";

const Message = (props) => {
  const { user } = useContext(GlobalContext);
  const isSent = props.message.sender === user;
  return (
    <Box
      sx={{
        mb: 3,
        display: "flex",
        alignItems: "center",
        ml: isSent && "auto",
        mr: isSent && 2.5,
        maxWidth: "70%",
      }}
    >
      {!isSent && <AccountCircle sx={{ fontSize: 30, mr: 1 }} />}
      <Typography
        sx={{
          backgroundColor: isSent ? "#5BA199" : "#BBC6C8",

          p: 1.2,
          borderRadius: 3,
          width: "auto",
        }}
        variant="p"
      >
        {props.message.body}
      </Typography>
    </Box>
  );
};

export default Message;
