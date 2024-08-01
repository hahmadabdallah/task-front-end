
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const ArtistHeader = ({ imageUrl, name, followers, popularity ,onClick}) => {
 
const handleClick = () => {
  onClick();
};
  return (
    <div className='artistInfo'>
      <div className='angleLeftIcon'>
                    <FontAwesomeIcon icon={faAngleLeft} onClick={handleClick} />
      </div>
      <div className='imageInfoWrapper'>
      <div className='imageWrapper'>
        <img src={imageUrl} alt={name} />
      </div>
     
      <div className='infoWrapper'>
        <div className='wrapper'>
          <span className='name'>{name}</span>
          <span className='popularity'> {popularity}</span>
        </div>
        <span className='followers'>{followers} followers</span>
      </div>

      </div>
     


     
    </div>
  );
};

export default ArtistHeader;
