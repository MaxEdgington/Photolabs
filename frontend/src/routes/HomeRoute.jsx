import React, { useState, useEffect } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';




const HomeRoute = (props) => {

  // imported state of likedPhotos and setLikedPhotos equals initializing the state 


  // use state function returns an array, first element is state itself, second element modifies the state



  const childProps = {
    likedPhotos: props.likedPhotos,
    setLikedPhotos: props.setLikedPhotos,
    toggleLikedPhotos: props.toggleLikedPhotos,
  };

  // creating child props that contains state and also the function we just made 

  return (
    <div className="home-route">
      <TopNavigation {...childProps}></TopNavigation>
      <PhotoList {...childProps} setShowModal={props.setShowModal} setSelectedPhoto={props.setSelectedPhoto} selectedPhoto={props.selectedPhoto} photos={props.photos} />
    </div>
  );
};

export default HomeRoute;

//  likedPhotos= likedPhotos />{/* Insert React */}