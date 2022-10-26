import {
  resetCameraImage,
  selectCameraImage,
} from "../../features/camera/cameraslice";
import CloseIcon from "@mui/icons-material/Close";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import CreateIcon from "@mui/icons-material/Create";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import NoteIcon from "@mui/icons-material/Note";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CropIcon from "@mui/icons-material/Crop";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import SendIcon from "@mui/icons-material/Send";
import "./Preview.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { DB } from "../../firebase/firebase";

const Preview = () => {
  //storage
  const id = uuidv4();
  const storage = getStorage();
  const storageRef = ref(storage, `posts/${id}`);

  //getting camera image from redux
  const cameraImage = useSelector(selectCameraImage);

  //redirecting user back to cam if theres not an image.
  const navigate = useNavigate();
  useEffect(() => {
    if (!cameraImage) {
      navigate("/");
    }
  }, [cameraImage, navigate]);

  //closing preview
  const dispatch = useDispatch();
  const closePreview = () => {
    dispatch(resetCameraImage());
  };

  //send post
  const sendPost = () => {
    uploadString(storageRef, `${cameraImage}`, "data_url")
      .then(() => {
        getDownloadURL(ref(storage, `posts/${id}`))
          .then((url) => {
            const docData = {
              imageURL: url,
              username: "USAMA",
              read: false,
              timestamp: serverTimestamp(),
            };
            setDoc(doc(DB, "posts", `${id}`), docData);
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
    navigate("/chats");
  };

  return (
    <motion.div
      className="preview"
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      whileInView={{
        opacity: 1,
      }}
    >
      <CloseIcon
        className="close__btn"
        fontSize="small"
        onClick={closePreview}
      />

      <div className="preview__toolbarIcons">
        <TextFieldsIcon />
        <CreateIcon />
        <NoteIcon />
        <AttachFileIcon />
        <CropIcon />
        <MusicNoteIcon />
        <AlarmOnIcon />
      </div>
      <img src={cameraImage} alt="preview-image" className="preview__img" />

      <div className="preview__footer" onClick={sendPost}>
        <p>Send Now</p>
        <SendIcon />
      </div>
    </motion.div>
  );
};

export default Preview;
// .getDownloadURL(storageRef).then((url) => {
//
// })
// .catch((error) => {
//   console.log(error.message);
// });
