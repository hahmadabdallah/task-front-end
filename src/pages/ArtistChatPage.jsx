import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ArtistHeader from '../components/ArtistHeader';
import { getArtistInfoById } from '../utils/Api';
import Chat from '../components/Chat/Chat';
import {generateUserID} from '../utils/GenerateUserId';
import axios from 'axios';
const ArtistChatPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;
  const [artist, setArtist] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [userID, setUserID] = useState(localStorage.getItem('userID') || generateUserID());
  

const formatFollowers = (followers) => {
    if (followers >= 1000) {
        return `${(followers / 1000).toFixed(1)}K`;
    }
    return followers;
};
  useEffect(() => {
    const fetchArtistInfo = async () => {
      const artistInfo = await getArtistInfoById(id);
   
        setArtist(artistInfo);
    
      //const history = await getChatHistory(id, userID);
     // setChatHistory(history);
    };

    // if (!userID) {
    //   setUserID(generateUserID());
    //   localStorage.setItem('userID', userID);
    // }

 // Fetch chat history from the backend
 const fetchChatHistory = async () => {
    const response = await axios.get(`${API_URL}/api/chat-history/${userID}/${id}`);
    setChatHistory(response.data);
  };
  fetchChatHistory();
    fetchArtistInfo();
  }, [id,userID]);

  const handleSendMessage = async () => {
    if (newMessage.trim() !== '') {
      try {
        // Send the message to the backend
        await axios.post(`${API_URL}/api/chat-history`, {
          userID,
          message: newMessage,
          artist:artist.name,
        });

        // Append the new message to the chat history
        setChatHistory([...chatHistory, { userID, message: newMessage, timestamp: new Date() }]);
        setNewMessage('');

        const response = await axios.post(`${API_URL}/api/chat`, { message: newMessage, artist: artist.name });
        setChatHistory([...chatHistory, { userId: 'ai', message: response.data.message, timestamp: new Date() }]);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };
const handleClick = () => {
    navigate(-1);
};
if (artist.length===0) {
    return <div className='text-white'>Loading...</div>;
  }
  return (
    <div className='artistChatPage'>
      {artist && (
        <>
          <ArtistHeader
            imageUrl={artist.images[2].url}
            name={artist.name}
            followers={formatFollowers(artist.followers.total)}
            popularity={artist.popularity}
            onClick={handleClick} 
          />
         
          <Chat newMessage={newMessage} setNewMessage={setNewMessage} />
        </>
       )}  
    </div>
  );
};

export default ArtistChatPage;