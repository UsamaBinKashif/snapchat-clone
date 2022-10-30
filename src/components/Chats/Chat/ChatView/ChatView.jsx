
import React, { useEffect } from 'react';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import './ChatView.css';
import { selectSelectedImage } from '../../../../features/app/appslice';



const ChatView = () => {

  const selectedImage = useSelector(selectSelectedImage);
  const navigate = useNavigate();

  useEffect(() => {
    if(!selectedImage) {
        exit();
    }
  }, [selectedImage]);

  const exit = () => {
    navigate('/chats', { replace: true });
  };

  return (

    <div className='chatView'>
        <img src={selectedImage} alt="" onClick={exit} />
        <div class="chatView_timer">
            <CountdownCircleTimer 
                isPlaying
                duration={6}
                strokeWidth={6}
                size={50}
                colors={[
                    ["#004777",0.33],
                    ["#F7B801",0.33],
                    ["#A30000",0.33],
                ]}
            >
                {({remainingTime})=>{
                    if(remainingTime===0){
                        exit();
                    }
                    return remainingTime;
                }}            
            </CountdownCircleTimer>      
        </div>

    </div>

  )

};

export default ChatView;
