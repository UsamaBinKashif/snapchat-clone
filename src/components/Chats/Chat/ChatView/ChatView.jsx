import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./ChatView.css";
import { selectSelectedImage } from "../../../../features/app/appslice";
import { motion } from "framer-motion";

const ChatView = () => {
  const selectedImage = useSelector(selectSelectedImage);
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedImage) {
      exit();
    }
  }, [selectedImage]);

  const exit = () => {
    navigate("/chats", { replace: true });
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -200,
      }}
      transition={{
        duration: 0.9,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      className="chatView"
    >
      <img src={selectedImage} onClick={exit} />
      <div className="chatView_timer">
        <CountdownCircleTimer
          isPlaying
          duration={7}
          strokeWidth={3}
          size={50}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
         
        >
          {({ remainingTime }) => {
            if (remainingTime === 0) {
              exit();
            }
            return remainingTime;
          }}
        </CountdownCircleTimer>
      </div>
    </motion.div>
  );
};

export default ChatView;
