import { Stack } from "@mui/material";
import Message from "./Message";
import messages from "../../data/messages";
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";

const MessageField = () => {
  const { room, newMessages } = useContext(GlobalContext);
  // const messagesOfSelectedRoom = [...messages, ...newMessages].filter(
  const messagesOfSelectedRoom = newMessages.filter(
    (message) => message && message.room && message.room === room._id
  );
  const xxmessages = messagesOfSelectedRoom.map((message) => message.body);
  console.log(xxmessages);

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
