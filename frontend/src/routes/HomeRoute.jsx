import React, { useState, useEffect } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';




const HomeRoute = (props) => {

  // imported state of likedPhotos and setLikedPhotos equals initializing the state 
  const [likedPhotos, setLikedPhotos] = useState([]);

  // use state function returns an array, first element is state itself, second element modifies the state

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

  const childProps = {
    likedPhotos: likedPhotos,
    setLikedPhotos: setLikedPhotos,
    toggleLikedPhotos: toggleLikedPhotos,
  };

  // creating child props that contains state and also the function we just made 

  return (
    <div className="home-route">
      <TopNavigation {...childProps}></TopNavigation>
      <PhotoList {...childProps} setShowModal={props.setShowModal}></PhotoList>
    </div>
  );
};

export default HomeRoute;

//  likedPhotos= likedPhotos />{/* Insert React */}