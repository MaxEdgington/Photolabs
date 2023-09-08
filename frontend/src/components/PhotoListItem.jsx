import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <div>
        <PhotoFavButton>
        </PhotoFavButton>
        <img className="photo-list__image" src={props.imageSource} alt="Description of the image" />

      </div>
      <div className="photo-list__user-details ">
        <img className="photo-list__user-profile" src={props.profile} alt="Description of the image" />
        <div className="photo-list__user-info">
          <span>{props.username}</span><br />
          <span className="photo-list__user-location">{props.location.city}, {props.location.country} </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;

// returning one comment 