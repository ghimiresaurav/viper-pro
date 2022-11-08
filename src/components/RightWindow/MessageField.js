import { Stack } from "@mui/material";
import Message from "./Message";
import messages from "../../data/messages";

const MessageField = () => {
  const selectedRoom = "6368f26677b679d2a2b1b607";
  const messagesOfChat = messages.filter(
    (message) => message.room == selectedRoom
  );
  console.log(messagesOfChat);
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
      {messagesOfChat.map((message) => (
        <Message key={message._id} message={message} />
      ))}
    </Stack>
  );
};

export default MessageField;
