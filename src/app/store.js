import { configureStore } from "@reduxjs/toolkit";
import cameraReducer from "../features/camera/cameraslice";
import appReducer from "../features/app/appslice";
export const store = configureStore({
  reducer: {
    camera: cameraReducer,
    app: appReducer,
  },
});
