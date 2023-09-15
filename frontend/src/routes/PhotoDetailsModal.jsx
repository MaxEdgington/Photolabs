import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";
const PhotoDetailsModal = (props) => {
  const selected = props.likedPhotos.includes(props.selectedPhoto.id);
  console.log("props.id", props.id);
  console.log("selected", selected);

  const childProps = {
    likedPhotos: props.likedPhotos,
    setLikedPhotos: props.setLikedPhotos,
    toggleLikedPhotos: props.toggleLikedPhotos,
  };

  const exit = function () {
    props.setShowModal(false);
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={exit}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div>
        <PhotoFavButton
          onClick={() => props.toggleLikedPhotos(props.selectedPhoto.id)}
          selected={selected}
        />

        <img
          className="photo-details-modal__image"
          src={props.selectedPhoto.urls.regular}
          alt="Description of the image"
        />

        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile "
            src={props.selectedPhoto.user.profile}
            alt="Description of the image"
          />
          <div className="photo-details-modal__photographer-info">
            <span>{props.selectedPhoto.user.username}</span>
            <br />
            <span className="photo-details-modal__photographer-location">
              {props.selectedPhoto.location.city},{" "}
              {props.selectedPhoto.location.country}{" "}
            </span>
          </div>
        </div>
        <div className="photo-details-modal__header">
          <h2>Similar Photos</h2>
        </div>
        <div className="photo-details-modal__images">
          <PhotoList
            {...childProps}
            setShowModal={() => {}}
            setSelectedPhoto={() => {}}
            selectedPhoto={props.selectedPhoto}
            photos={Object.values(props.selectedPhoto.similar_photos)}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
