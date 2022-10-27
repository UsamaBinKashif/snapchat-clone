import Webcam from "react-webcam";
import "./Webcam.css";
import { useCallback, useRef, useState } from "react";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { setCameraImage } from "../../features/camera/cameraslice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PeopleIcon from "@mui/icons-material/People";
import CameraswitchIcon from "@mui/icons-material/Cameraswitch";
import { motion } from "framer-motion";
const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

const videoConstraints = {
  facingMode: FACING_MODE_USER,
  width: 300,
  height: 450,
};

const WebCamCapture = () => {
  //navigating path for preview
  const navigate = useNavigate();

  //web cam reference
  const webcamRef = useRef(null);

  //state for storing the image
  const dispatch = useDispatch();

  // capturing the image
  const capture = useCallback(() => {
    const imgSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imgSrc));
    //navigate to preview
    navigate("/preview");
  }, [webcamRef]);

  //chats
  const chats = () => {
    navigate("/chats");
  };

  //change facing mode

  const [facingMode, setFacingMode] = useState(FACING_MODE_USER);
  const handleClick = useCallback(() => {
    setFacingMode((prevState) =>
      prevState === FACING_MODE_USER
        ? FACING_MODE_ENVIRONMENT
        : FACING_MODE_USER
    );
  }, []);

  return (
    <motion.div
      className="webcam"
      initial={{
        opacity: 0,
        x: -200,
      }}
      transition={{
        duration: 0.5,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
    >
      <CameraswitchIcon className="switch__btn" onClick={handleClick} />
      <Webcam
height={450}
width={300}
        audio={false}
        screenshotFormat="image/png"
        videoConstraints={{
          ...videoConstraints,
          facingMode
        }}
        ref={webcamRef}
        mirrored={false}
      ></Webcam>

      <div className="webcam__btns">
        <div className="btn chat__btn" onClick={chats}>
          <ChatBubbleIcon />
        </div>
        <div>
          <RadioButtonUncheckedIcon fontSize="large" onClick={capture} />
        </div>
        <div className="btn">
          <PeopleIcon />
        </div>
      </div>
    </motion.div>
  );
};

export default WebCamCapture;
