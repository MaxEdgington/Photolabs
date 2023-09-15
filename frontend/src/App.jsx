import React from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  const {
    likedPhotos,
    selectedPhoto,
    showModal,
    setLikedPhotos,
    photoData,
    setSelectedPhoto,
    setShowModal,
    toggleLikedPhotos,
    getPhotosByTopics,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        toggleLikedPhotos={toggleLikedPhotos}
        photos={photoData}
        likedPhotos={likedPhotos}
        setLikedPhotos={setLikedPhotos}
        setShowModal={setShowModal}
        setSelectedPhoto={setSelectedPhoto}
        selectedPhoto={selectedPhoto}
        getPhotosByTopics={getPhotosByTopics}
      />

      {showModal ? (
        <PhotoDetailsModal
          toggleLikedPhotos={toggleLikedPhotos}
          likedPhotos={likedPhotos}
          setLikedPhotos={setLikedPhotos}
          selectedPhoto={selectedPhoto}
          setShowModal={setShowModal}
        ></PhotoDetailsModal>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
