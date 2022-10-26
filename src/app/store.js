import { configureStore } from "@reduxjs/toolkit";
import cameraReducer from "../features/camera/cameraslice";

export const store = configureStore({
  reducer: {
    camera: cameraReducer,
  },
});
