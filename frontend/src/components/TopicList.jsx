import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import useApplicationData from "hooks/useApplicationData";

const TopicList = function (props) {
  const { topicData } = useApplicationData();

  const list = topicData.map((topic) => {
    return (
      <TopicListItem
        key={topic.id}
        id={topic.id}
        label={topic.title}
        getPhotosByTopics={props.getPhotosByTopics}
      />
    );
  });

  return <div className="top-nav-bar__topic-list">{list}</div>;
};

export default TopicList;
