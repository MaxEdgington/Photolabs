import React from "react";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavIcon from "./FavIcon";

const TopNavigation = (props) => {
  // Determine if alert should be displayed based on liked photos
  const displayAlert = props.likedPhotos.length > 0;

  return (
    <div className="top-nav-bar">
      {/* Render Logo */}
      <span className="top-nav-bar__logo">PhotoLabs</span>

      {/* Render TopicList for topic-based photo fetching */}
      <TopicList getPhotosByTopics={props.getPhotosByTopics} />

      {/* Render FavIcon with alert visibility condition */}
      <FavIcon selected={true} displayAlert={displayAlert} />
    </div>
  );
};

export default TopNavigation;
