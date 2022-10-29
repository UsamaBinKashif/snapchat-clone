import { StopRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import "./Chat.css"
const Chat = ({id, username, timestamp, read, imageUrl, profilePic }) => {
  return (
    <div className="chat">
      <Avatar src={profilePic} className="chat__avatar" />
      <div className="chat__info">
        <h4>{username}</h4>
        <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
      </div>
      <StopRounded className='chat__readIcon' />
    </div>
  );
};

export default Chat;
