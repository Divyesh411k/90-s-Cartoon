import React, { useState } from 'react';
import './gamecard.css';

const GameCard = ({ game }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (<><a href={game.gamelink} target='blank'>
    <div className={`gcard ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>

      {isHovered ? (
        <img src={game.gifUrl}alt={`${game.title} GIF`} className="gifimage" />
                   ) : (
        <img src={game.imageUrl} alt={game.title}className="gimage"/>
           )
      }
       <h3 className={`gname ${isHovered ? 'visible' : ''}`}>
        {game.name}
      </h3>
    </div>
    </a>
    </>
  );
};

export default GameCard;
