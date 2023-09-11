import React, { useState } from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const [showModal, setShowModal] = useState(false);
  // setShowModal(!showModal)
  return (
    <div className="App">
      <HomeRoute setShowModal={setShowModal} />
      {showModal ? <PhotoDetailsModal setShowModal={setShowModal}></PhotoDetailsModal> : ""}

    </div>
  );

};

export default App;
