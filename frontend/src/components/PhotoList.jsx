import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

// why are we not importing HomeRoute? 
// when we call component we are required to pass in required props. Props are not imported, you can import the values you want to pass down as props but when you export component you can't export props with component, so we need to pass down props when the component is called (when the buttons items are called in homeRoute)



const PhotoList = (props) => {


  // why are passing item and index to map? 
  // similar to filter function, when you are mapping through an array, the callback you pass it will take in the element as a first parameter and the position as a second parameter. Right now it's not being used but I might use it to display number of each item or unique key. When I map through array to generate list of component, I'm gaurenteed that index is unique. If we're sure there's a particular property in obj, maybe id prop that's unique across I can use that instead of index.  

  const renderedPhotos = photos.map((item, i) => {
    return <PhotoListItem setShowModal={props.setShowModal}
      className="photo-list__item" id={item.id} toggleLikedPhotos={props.toggleLikedPhotos} likedPhotos={props.likedPhotos} photoList={props.PhotoList} imageSource={item.urls.full} profile={item.urls.regular} key={item.id} username={item.user.username}
      location={item.location} />;
  });




  return (
    <ul className="photo-list">
      {renderedPhotos}
    </ul>
  );
};

export default PhotoList;
