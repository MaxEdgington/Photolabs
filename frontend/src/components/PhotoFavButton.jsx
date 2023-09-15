import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ selected, onClick }) {
  // Render a clickable favorite button
  return (
    <div className="photo-list__fav-icon" onClick={onClick}>
      <div className="photo-list__fav-icon-svg">
        {/* Display FavIcon based on selection state */}
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
