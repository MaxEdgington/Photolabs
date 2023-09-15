import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = function (props) {
  // Render individual topic list item and attach click handler
  return (
    <div
      className="topic-list__item"
      onClick={() => {
        props.getPhotosByTopics(props.id);
      }}
    >
      <span href={props.link}>{props.label}</span>
    </div>
  );
};

export default TopicListItem;
