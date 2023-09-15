import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  // Destructure state and functions from custom hook
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
      {/* Render HomeRoute with necessary props */}
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

      {/* Conditionally render PhotoDetailsModal */}
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
