import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = function(props) {
  console.log(props.label);
  return (
    <div className="topic-list__item">
      <span href={props.link}>{props.label}</span>
    </div>
  );
};

export default TopicListItem;
