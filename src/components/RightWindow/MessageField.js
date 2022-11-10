import { Stack } from "@mui/material";
import Message from "./Message";
import messages from "../../data/messages";
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";

const MessageField = () => {
  const { room } = useContext(GlobalContext);
  const messagesOfSelectedRoom = messages.filter(
    (message) => message.room === room._id
  );
  return (
    <Stack
      sx={{
        height: "75.4%",
        overflow: "hidden auto",
        position: "relative",
        pl: 2,
        pt: 2,
      }}
    >
      {messagesOfSelectedRoom.map((message) => (
        <Message key={message._id} message={message} />
      ))}
    </Stack>
  );
};

export default MessageField;
