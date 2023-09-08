import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';



function PhotoFavButton() {

  const [selected, setSelected] = useState(false);

  const onClick = () => {
    setSelected(!selected); // set isFav to be the opposite of what it currently is
    console.log('Icon clicked!', selected); // selected shows that the states are changing 
  };

  return (
    <div className="photo-list__fav-icon" onClick={onClick}>
      <div className="photo-list__fav-icon-svg" >
        <FavIcon selected={selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;



// check with insurance company 
// that registered social worker is covered 