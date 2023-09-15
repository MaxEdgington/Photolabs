import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = function(props) {
  // const test = function() {
  //   console.log(props.id, "props.id");
  //   props.getPhotosByTopics(props.id);
  // };

  // console.log(props.id, "topiclist item");


  return (
    <div className="topic-list__item" onClick={() => {
      props.getPhotosByTopics(props.id);
      console.log(props.id, "onclick topic");
    }



    }
    >
      <span href={props.link}>{props.label}</span>
    </div>
  );
};

export default TopicListItem;
