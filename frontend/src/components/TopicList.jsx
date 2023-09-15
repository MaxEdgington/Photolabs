import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import useApplicationData from "hooks/useApplicationData";

const TopicList = function (props) {
  // Fetch topic data via custom hook
  const { topicData } = useApplicationData();

  // Map topic data to TopicListItem components
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

  // Render the list of topics
  return <div className="top-nav-bar__topic-list">{list}</div>;
};

export default TopicList;
