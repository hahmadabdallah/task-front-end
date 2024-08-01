import './style.css';
import { useEffect, useState } from 'react';

const BotControlArea = ({ handleCopy, isCopied }) => {
  const [copyText, setMessage] = useState('Copy');
  const copyClasses = `action copy ${copyText === 'Copied!' ? 'green' : 'white'}`;

  useEffect(() => {
    let text = 'Copy';
    if (isCopied) {
      text = 'Copied!';
      setMessage(text);
      setTimeout(() => {
        text = 'Copy';
        setMessage(text);
      }, 1500);
    }
  }, [isCopied]);

  return (
    <div className='botControlArea'>
      <button className='button'>Explain it</button>

      <div className='question'>
        <span className='text'>Was this answer helpful?</span>
        <span className='item thumb'>👍</span>
        <span className='item thumb'>👎</span>
      </div>
      <div className='actions'>
        <span className={copyClasses} onClick={handleCopy}>
          {copyText}
        </span>
        <span className='action regenerate'>Regenerate</span>
      </div>
    </div>
  );
};

export default BotControlArea;
