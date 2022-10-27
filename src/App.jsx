import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WebCamCapture, Preview, Chats } from "./components";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<WebCamCapture />} />
            <Route path="/preview" element={<Preview />} />
            <Route path="/chats" element={<Chats />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
