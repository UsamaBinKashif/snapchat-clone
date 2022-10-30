import "./Chats.css";
import { motion } from "framer-motion";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useNavigate } from "react-router-dom";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useEffect, useState } from "react";
import Chat from "./Chat/Chat";

const Chats = () => {
  //navigating path for preview
  const navigate = useNavigate();
  const camera = () => {
    navigate("/");
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
    );
  }, []);

 

  return (
    <motion.div
      className="chats"
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      whileInView={{
        opacity: 1,
      }}
    >
      <div className="chats__header">
        <Avatar className="chats__header--avatar" />
        <div className="chats__header--search">
          <SearchIcon fontSize="small" className="icon" />
          <input type="text" placeholder="Search" />
        </div>
        <CameraAltIcon
          className="chats__header--icon"
          fontSize="small"
          onClick={camera}
        />
      </div>
      <div className="chats__posts">
      {posts.map(({id, data: {profilePic, username, timestamp, imageUrl, read}}) => (
                <Chat
                    key={id}
                    id={id}
                    username={username}
                    timestamp={timestamp}
                    imageUrl={imageUrl}
                    read={read}
                    profilePic={profilePic}
                />
            ))}
      </div>
    </motion.div>
  );
};

export default Chats;
