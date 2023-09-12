import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {


  // first off the photolistitem, the component takes in the likedPhotos array and we use likedPhotosArray to check if current photos in photolist item is liked or not. Then we save that in a variable named selected which passes select value to photo fav button as props. 



  const selected = props.likedPhotos.includes(props.item.id);
  // before I was getting an error because it was props.id - which is undefined - we changed it to pass down item as a prop instead of props.id 

  // before we were passing down props.id 




  // remember that the photoFavButton requires two props (the onClick, the selected (a boolean photo(true/false e.g liked/unliked))) We want selected value to determine likedPhotosArray. We use it to scan through the likes to see if it includes props.id 

  // This helps us defined selected within the function



  const click = function() {
    // props.setSelectedPhoto();
    // showing showModal to be true


    console.log("click-props", props);
    props.setSelectedPhoto(props.item); // right now I'm saving all of the props but I instead need to call - we replaced this to item because selectedPhoto is supposed to be the data for that photo(username,lcation etc.) I wasn't getting all of the information before, so we need to send all of the information to be able to get similar photos or I would need to add another prop which wouldn't make a lot of sense because it's only needed in the model. 



    // since props.selectedPhoto is defined in app.jsx when we call it here we're actually updating the state in app and it passes the information down via the props. 
    props.setShowModal(true);
  };

  return (
    <div className="photo-list__item">
      <div>
        <PhotoFavButton onClick={() => props.toggleLikedPhotos(props.item.id)} selected={selected}>
        </PhotoFavButton>
        <img className="photo-list__image" src={props.item.urls.full} alt="Description of the image" onClick={click} />

      </div>
      <div className="photo-list__user-details ">
        <img className="photo-list__user-profile" src={props.item.user.profile} alt="Description of the image" />
        <div className="photo-list__user-info">
          <span>{props.item.user.username}</span><br />
          <span className="photo-list__user-location">{props.item.location.city}, {props.item.location.country} </span>
        </div>
      </div>
    </div >
  );
};

export default PhotoListItem;

// returning one comment 


// in PhotoListItem we're passing down the onclick and selected to PhotoFavButton to call which requires the onClick and Selected to work. 

