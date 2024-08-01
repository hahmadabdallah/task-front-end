import React, { useState, useEffect } from 'react';
import GenreCard from '../components/GenreCard';
import { getGenres } from '../utils/Api';

const GenrePage = () => {

    const [genres, setGenres] = useState([]);

    useEffect(() => {

        fetchAndCacheGenreData();

    }, []);


    async function fetchAndCacheGenreData() {
        // Check if genres are already cached in local storage
        const cachedData = JSON.parse(localStorage.getItem('genreData'));
        if (cachedData) {
            setGenres(cachedData);
            return;

        }
        const data = await getGenres()
        localStorage.setItem('genreData', JSON.stringify(data));
        setGenres(data);

    }


    return (
        <div className="container">

            <div className="center">
                <div>
                    <h1 className='centerTitle'>Pick your genre</h1>
                </div>
                <div className='genres'>
                    {genres.map((genre) => (

                        <GenreCard key={genre} genre={genre} />

                    ))}
                </div>
            </div>
        </div>
    );
};

export default GenrePage;