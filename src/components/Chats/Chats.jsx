import "./Chats.css";
import { motion } from "framer-motion";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useNavigate } from "react-router-dom";
const Chats = () => {
  //navigating path for preview
  const navigate = useNavigate();
  const camera = () => {
    navigate("/");
  };

  return (
    <motion.div
      className="chat"
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
      <div className="chat__header">
        <Avatar className="chat__header--avatar" />
        <div className="chat__header--search">
          <SearchIcon fontSize="small" />
          <input type="text" placeholder="Search" />
        </div>
        <CameraAltIcon
          className="chat__header--icon"
          fontSize="small"
          onClick={camera}
        />
      </div>
      <div className="chat__posts">
        
      </div>

    </motion.div>
  );
};

export default Chats;
