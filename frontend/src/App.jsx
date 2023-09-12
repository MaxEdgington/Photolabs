import React, { useState } from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from "mocks/photos";


// Note: Rendering a single component to build components in isolation
const App = () => {
  // use states at the top functions after 
  const [likedPhotos, setLikedPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null); // added into state Selected Photo which will tell us ID of selected photo
  const [showModal, setShowModal] = useState(false);
  // setShowModal(!showModal)


  //toggleLikedPhotos makes use of the function that's responsible for modifying the state, instead of passing a new value to the state it passes a callback as a function

  // When you pass in a function to the setState (setLikedPhotos) -> the function would recieve the current state as a parameter and the function is expected to return a new state, whatever the function returns becomes the new state 

  const toggleLikedPhotos = function(photoId) {
    // prev is a reference to current array of liked photos
    setLikedPhotos((prev) => {   // arrow function expected to return new value, that new value becomes the next value for the state(likedPhotos)
      if (!prev.includes(photoId)) {  //check if current value does not include the photoId
        return [...prev, photoId]; //copy previous array with spread operator and photoId that wasn't included
      } else return prev.filter((id) => id !== photoId); // id represents each element in the likedPhotosArray
      // the filter works by taking in a callback and the callback would be called on each element in the array, the callback is expected to return a boolean value
      // truthy current element should be include & vice versa
      // we want to include id if it does not = parameter photoid


      // return prev using filter where the id in current prev does not include any photoId 


    });
  };







  return (
    <div className="App">
      <HomeRoute toggleLikedPhotos={toggleLikedPhotos} photos={photos} likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos} setShowModal={setShowModal} setSelectedPhoto={setSelectedPhoto} selectedPhoto={selectedPhoto} />

      {showModal ? <PhotoDetailsModal toggleLikedPhotos={toggleLikedPhotos} likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos} selectedPhoto={selectedPhoto} setShowModal={setShowModal}  ></PhotoDetailsModal > : ""}

    </div>
  );

};

export default App;

// if I'm not getting an error, I look at what's directly reponsible for what could be throwing the errors, go through and see if things are coming the way I expect them too 

// in our case we changed the prop so we had to change the prop information where it was being called in the state. 