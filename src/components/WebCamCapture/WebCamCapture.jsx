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

//camera constraints
const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";
const MIRROR_TRUE = true;
const MIRROR_FALSE = false;
const videoConstraints = {
  facingMode: FACING_MODE_USER,
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
      }}
      transition={{
        duration: 0.5,
      }}
      whileInView={{
        opacity: 1,
      }}
    >
      <CameraswitchIcon className="switch__btn" onClick={handleClick} />

      <Webcam
        audio={false}
        screenshotFormat="image/png"
        videoConstraints={{
          ...videoConstraints,
          facingMode,
        }}

        ref={webcamRef}
        mirrored={MIRROR_TRUE ? facingMode === FACING_MODE_USER : MIRROR_FALSE}
        className="webcam__cam"
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
