import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const renderedPhotos = props.photos.map((item, i) => {
    return (
      <PhotoListItem
        setShowModal={props.setShowModal}
        selectedPhoto={props.selectedPhoto}
        setSelectedPhoto={props.setSelectedPhoto}
        className="photo-list__item"
        key={item.id}
        toggleLikedPhotos={props.toggleLikedPhotos}
        likedPhotos={props.likedPhotos}
        photoList={props.PhotoList}
        item={item}
      />
    );
  });

  return <ul className="photo-list">{renderedPhotos}</ul>;
};

export default PhotoList;
