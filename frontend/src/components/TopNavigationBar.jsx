import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavIcon from './FavIcon';


const TopNavigation = (props) => {

  // component execution -> we execute component and pass a value 
  // same as declaring / executing 

  const displayAlert = props.likedPhotos.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList getPhotosByTopics={props.getPhotosByTopics} />
      <FavIcon selected={true} displayAlert={displayAlert} />
    </div>
  );
};

export default TopNavigation;