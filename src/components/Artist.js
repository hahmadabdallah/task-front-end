import React from 'react';

const Artist = ({ id, image, name, followers, popularity,onClick }) => {

    const formatFollowers = (followers) => {
        if (followers >= 1000) {
            return `${(followers / 1000).toFixed(1)}K`;
        }
        return followers;
    };

    const handleClick = () => {
        onClick(id);
      };
  

    return (
        <div className='col-md col-6' key={id}>

            <div className="card mb-4 position-realtive " onClick={handleClick} >

                <img src={image} className="card-img" alt={name} />


                <div className="mt-2 pt-1 ">
                    <h5 className="nameArtist">{name}</h5>
                    <p className="numberFollowers">{formatFollowers(followers)} followers</p>
                    <div className='fixedBottomCard'>
                        {popularity}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Artist;