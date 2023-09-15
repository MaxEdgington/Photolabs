import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";
const PhotoDetailsModal = (props) => {
  // Determine if the photo is liked
  const selected = props.likedPhotos.includes(props.selectedPhoto.id);

  // Aggregate child props
  const childProps = {
    likedPhotos: props.likedPhotos,
    setLikedPhotos: props.setLikedPhotos,
    toggleLikedPhotos: props.toggleLikedPhotos,
  };

  // Exit modal function
  const exit = function () {
    props.setShowModal(false);
  };

  return (
    <div className="photo-details-modal">
      {/* Close button */}
      <button className="photo-details-modal__close-button" onClick={exit}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* Main content */}
      <div>
        {/* Favorite button */}
        <PhotoFavButton
          onClick={() => props.toggleLikedPhotos(props.selectedPhoto.id)}
          selected={selected}
        />

        {/* Selected photo */}
        <img
          className="photo-details-modal__image"
          src={props.selectedPhoto.urls.regular}
          alt="Description of the image"
        />

        {/* Photographer details */}
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

        {/* Similar photos header */}
        <div className="photo-details-modal__header">
          <h2>Similar Photos</h2>
        </div>

        {/* List of similar photos */}
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
