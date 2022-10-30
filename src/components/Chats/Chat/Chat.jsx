import { StopRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import TimeAgo from "react-timeago";
import { motion } from "framer-motion";
import "./Chat.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectImage } from "../../../features/app/appslice";
import { useNavigate } from "react-router-dom";
import { updateDoc,doc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
const Chat = ({ id, username, timestamp, read, imageUrl, profilePic }) => {
  //open image
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl));
      updateDoc(doc(db,'posts',id),{
        read: true
    })
    navigate('/chats/chatview')
    }
  };
  return (
    <motion.div
    onClick={open}
      className="chat"
      initial={{
        x: -200,
      }}
      transition={{
        duration: 0.5,
      }}
      whileInView={{
        x: 0,
      }}
    >
      <Avatar src={profilePic} className="chat__avatar" />
      <div className="chat__info">
        <h4>{username}</h4>
        <p>
        {!read ? 'Tap to view -' : "Opened" }{" "}
          <TimeAgo date={new Date(timestamp?.toDate()).toUTCString()} />
        </p>
      </div>
      <StopRounded className="chat__readIcon" />
    </motion.div>
  );
};

export default Chat;
