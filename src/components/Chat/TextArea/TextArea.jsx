import './style.css';

const TextArea = ({ setNewMessage, newMessage }) => {
  const handleChange = (e) => {
    if (e.target.value.length > 150) return;
    setNewMessage(e.target.value);
  };

  return (
    <div className='textArea'>
      <div className='textAreaWrapper'>
        <textarea type='text' placeholder='Type a message...' value={newMessage} onChange={handleChange} />
        <div className='actions'>
          <span className={`charCount ${newMessage.length === 150 ? 'red' : 'grey'}`}>{newMessage.length}/150</span>
          <button className='sendButton'>Send</button>
        </div>
      </div>
    </div>
  );
};

export default TextArea;
