import React from 'react';
import { useNavigate } from 'react-router-dom';

const GenreCard = ({ genre }) => {
    const navigate = useNavigate();
    const handleGenreClick = (genre) => {
        navigate(`/artists/${genre}`);
      };
  return (
    <div
    className="genreBadge"
    onClick={() => handleGenreClick(genre)}
    >
    {genre}
  </div>
  );
};

export default GenreCard;