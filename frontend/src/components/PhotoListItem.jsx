import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  // Determine if the photo is in the likedPhotos list
  const selected = props.likedPhotos.includes(props.item.id);

  // Handle click to show modal
  const click = function () {
    props.setSelectedPhoto(props.item);
    props.setShowModal(true);
  };

  return (
    <div className="photo-list__item">
      {/* Render favorite button and photo */}
      <div>
        <PhotoFavButton
          onClick={() => props.toggleLikedPhotos(props.item.id)}
          selected={selected}
        ></PhotoFavButton>
        <img
          className="photo-list__image"
          src={props.item.urls.full}
          alt="Description of the image"
          onClick={click}
        />
      </div>

      {/* Render user details */}
      <div className="photo-list__user-details ">
        <img
          className="photo-list__user-profile"
          src={props.item.user.profile}
          alt="Description of the image"
        />
        <div className="photo-list__user-info">
          <span>{props.item.user.username}</span>
          <br />
          <span className="photo-list__user-location">
            {props.item.location.city}, {props.item.location.country}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
