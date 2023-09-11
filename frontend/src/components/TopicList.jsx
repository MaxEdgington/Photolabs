import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import PhotoFavButton from "./PhotoFavButton";
import topics from "mocks/topics";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = function(props) {

  const list = topics.map(topic => {
    console.log(topic);
    return <TopicListItem key={topic.id} label={topic.title} />;
  });


  return (
    <div className="top-nav-bar__topic-list">
      {list}
    </div>
  );
};

export default TopicList;
