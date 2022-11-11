import { Button, OutlinedInput } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { useContext, useState } from "react";
import socket from "../../utils/socket";
import GlobalContext from "../../contexts/GlobalContext";

const BottomBar = () => {
  const [input, setInput] = useState("");
  const {
    room,
    user,
    newMessages,
    setNewMessages,
    latestMessages,
    setLatestMessages,
  } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessageData = {
      sender: user,
      body: input,
      room: room._id,
      _id: Math.random() * 100000,
      time: new Date(),
    };
    socket.emit("new-message", newMessageData);
    setLatestMessages({
      ...latestMessages,
      [newMessageData.room]: {
        body: newMessageData.body,
        time: newMessageData.time,
      },
    });
    setNewMessages([...newMessages, newMessageData]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      sx={{
        height: "10.7%",
        width: "100%",
        bottom: 0,
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        p: "10px 20px",
      }}
    >
      <OutlinedInput
        placeholder="Aa"
        sx={{ width: "80%" }}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Button
        sx={{ height: "40px" }}
        variant="contained"
        endIcon={<SendRoundedIcon />}
        type="submit"
      >
        Send
      </Button>
    </form>
  );
};

export default BottomBar;
