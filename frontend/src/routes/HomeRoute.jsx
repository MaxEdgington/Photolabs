import React from "react";
import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
  // Aggregate child props
  const childProps = {
    likedPhotos: props.likedPhotos,
    setLikedPhotos: props.setLikedPhotos,
    toggleLikedPhotos: props.toggleLikedPhotos,
    getPhotosByTopics: props.getPhotosByTopics,
  };

  return (
    <div className="home-route">
      {/* Render TopNavigation with partial props */}
      <TopNavigation {...childProps}></TopNavigation>

      {/* Render PhotoList with extended props */}
      <PhotoList
        {...childProps}
        setShowModal={props.setShowModal}
        setSelectedPhoto={props.setSelectedPhoto}
        selectedPhoto={props.selectedPhoto}
        photos={props.photos}
      />
    </div>
  );
};

export default HomeRoute;
