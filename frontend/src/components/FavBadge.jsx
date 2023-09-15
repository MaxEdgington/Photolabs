import React from "react";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";

const FavBadge = ({ isFavPhotoExist }) => {
  // Render FavIcon, conditionally display alert based on isFavPhotoExist
  return (
    <div className="fav-badge">
      <FavIcon displayAlert={!!isFavPhotoExist} />
    </div>
  );
};

export default FavBadge;
