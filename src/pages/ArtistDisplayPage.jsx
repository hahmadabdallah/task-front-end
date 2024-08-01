import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Artist from '../components/Artist';
import { getArtistByGenre } from '../utils/Api';

const ArtistDisplayPage = () => {
   
    const navigate = useNavigate();
    const { genre } = useParams();
    const [artists, setArtists] = useState([]);

    useEffect(() => {

        fetchAndCacheArtistsByGenreData();

    }, [genre]);


    async function fetchAndCacheArtistsByGenreData() {
        // Check if genres are already cached in local storage
        const cachedData = JSON.parse(localStorage.getItem('artistsByGenreData'));

        if (cachedData && cachedData[genre]) {
            setArtists(cachedData);
            return;

        }
        const data = await getArtistByGenre(genre)
        localStorage.setItem('artistsByGenreData', JSON.stringify(data));
        setArtists(data);

    }
    const handleClick = () => {
        navigate('/');
    };
    const handleClickChatAi = (id) => {
        navigate(`/artist/${id}`);
    };
   

    return (
        <>
            <div className='bgHeader'>

                <div className='angleLeftIcon'>
                    <FontAwesomeIcon icon={faAngleLeft} onClick={handleClick} />
                </div>
                <div>
                    <h3 className='titleGenreHeader'>Genre / {genre}</h3>
                </div>

            </div>

            <div className="container">
                <div className='row'>
                    <div className='col-md-12 mx-auto mt-5 mt-3'>
                        <div className='row'>

                            {artists.map((artist) => (
                                <Artist
                                    key={artist.id}
                                    id={artist.id}
                                    image={artist.images[0].url}
                                    followers={artist.followers.total}
                                    name={artist.name}
                                    popularity={artist.popularity}
                                    onClick={handleClickChatAi}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ArtistDisplayPage;