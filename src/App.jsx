import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WebCamCapture, Preview, Chats, ChatView, Login } from "./components";
import { login, logout, selectUser } from "./features/app/appslice";
import { auth } from "./firebase/firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth,(authUser)=>{
      if (authUser){
         dispatch(login({
           username: authUser.displayName,
           profilePic: authUser.photoURL,
           id: authUser.uid,
         }))
      } else{
         dispatch(logout())
      }
   })
 },[]);
  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Routes>
              <Route exact path="/" element={<WebCamCapture />} />
              <Route path="/preview" element={<Preview />} />
              <Route path="/chats" element={<Chats />} />
              <Route path="/chats/chatview" element={<ChatView />} />
            </Routes>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
