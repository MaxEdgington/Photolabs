import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {


  // first off the photolistitem, the component takes in the likedPhotos array and we use likedPhotosArray to check if current photos in photolist item is liked or not. Then we save that in a variable named selected which passes select value to photo fav button as props. 



  const selected = props.likedPhotos.includes(props.id);
  // remember that the photoFavButton requires two props (the onClick, the selected (a boolean photo(true/false e.g liked/unliked))) We want selected value to determine likedPhotosArray. We use it to scan through the likes to see if it includes props.id 

  // This helps us defined selected within the function 
  const click = function() {
    props.setShowModal(true);
  };

  return (
    <div className="photo-list__item">
      <div>
        <PhotoFavButton onClick={() => props.toggleLikedPhotos(props.id)} selected={selected}>
        </PhotoFavButton>
        <img className="photo-list__image" src={props.imageSource} alt="Description of the image" onClick={click} />

      </div>
      <div className="photo-list__user-details ">
        <img className="photo-list__user-profile" src={props.profile} alt="Description of the image" />
        <div className="photo-list__user-info">
          <span>{props.username}</span><br />
          <span className="photo-list__user-location">{props.location.city}, {props.location.country} </span>
        </div>
      </div>
    </div >
  );
};

export default PhotoListItem;

// returning one comment 


// in PhotoListItem we're passing down the onclick and selected to PhotoFavButton to call which requires the onClick and Selected to work. 

