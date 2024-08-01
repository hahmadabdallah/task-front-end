import { useState } from 'react';
import BotControlArea from './BotControlArea/BotControlArea';
import './style.css';

const Bubble = ({ message, sender }) => {
  const [copied, setCopied] = useState(false);

  const copyTextToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const classes = `chatMessage ${sender === 'bot' ? 'bot' : 'user'}`;

  return (
    <div className={classes}>
      <div className='messageBubble'>
        <div className='messageText'>{message}</div>
        {sender === 'bot' && <BotControlArea handleCopy={() => copyTextToClipboard(message)} isCopied={copied} />}
      </div>
    </div>
  );
};

export default Bubble;
