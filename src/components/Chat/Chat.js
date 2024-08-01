import { data } from '../../data/data';
import Bubble from '../Bubble/Bubble';
import TextArea from './TextArea/TextArea';
import './style.css';

const Chat = ({ setNewMessage, newMessage }) => {
  return (
    <div className='chatContainer'>
      <div className='chatContent'>
        {data.map((message, index) => (
          <Bubble key={index} message={message.message} sender={message.sender} />
        ))}
      </div>
      <div className='chatContent textAreaContainer'>
        <TextArea newMessage={newMessage} setNewMessage={setNewMessage} />
      </div>
    </div>
  );
};

export default Chat;
