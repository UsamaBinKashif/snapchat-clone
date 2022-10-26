import Webcam from "react-webcam";
import "./Webcam.css";
import { useCallback, useRef } from "react";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { setCameraImage } from "../../features/camera/cameraslice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PeopleIcon from "@mui/icons-material/People";
import { motion } from "framer-motion";
const videoConstraints = {
  width: 240,
  height: 400,
  facingMode: "user",
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
  const chats = ()=>{
    navigate("/chats")
  }
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
      <Webcam
        audio={false}
        height={videoConstraints.height}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        mirrored={true}
        ref={webcamRef}
        videoConstraints={videoConstraints}
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
