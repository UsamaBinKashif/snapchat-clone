import React  from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WebCamCapture, Preview, Chats } from "./components";
import { DB } from "./firebase/firebase";
function App() {
 
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<WebCamCapture />} />
          <Route  path="/preview" element={<Preview />} />
          <Route  path="/chats" element={<Chats />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
