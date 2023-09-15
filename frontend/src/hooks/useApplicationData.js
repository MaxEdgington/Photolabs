import { useReducer, useEffect } from "react";

// Define action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
  SELECT_PHOTO: "SELECT_PHOTO",
  SELECT_TOPIC: "SELECT_TOPIC",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
};

// Reducer function handling state updates
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        likedPhotos: [...state.likedPhotos, action.payload.photoId],
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        likedPhotos: state.likedPhotos.filter(
          (id) => id !== action.payload.photoId
        ),
      };

    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload.selectedPhoto };

    case ACTIONS.SELECT_TOPIC:
      return { ...state, selectedTopic: action.payload.selectedTopic };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, showModal: action.payload.showModal };

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload.topicData };

    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, photoData: action.payload };

    default:
      return state;
  }
}

// Custom hook managing application data
export default function useApplicationData() {
  const initialState = {
    likedPhotos: [],
    selectedPhoto: null,
    selectedTopic: null,
    showModal: false,
    photoData: [],
    topicData: [],
  };

  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch photo data on mount
  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((res) => {
        return res.json();
      })

      .then((res) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res });
      });
  }, []);

  // Fetch topic data on mount
  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topicData: res } });
      });
  }, []);

  // Function to toggle liked photos
  const toggleLikedPhotos = function (photoId) {
    // Logic to add or remove photo from liked list
    if (!state.likedPhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photoId } });
    }
  };

  // Function to get photos by topic
  const getPhotosByTopics = function (selectedTopic) {
    // Fetch and dispatch photos by topic
    fetch(`http://localhost:8001/api/topics/photos/${selectedTopic}`)
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        return dispatch({
          type: ACTIONS.GET_PHOTOS_BY_TOPICS,
          payload: resData,
        });
      });
  };

  // Set selected photo
  const setSelectedPhoto = function (selectedPhoto) {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { selectedPhoto } });
  };

  // Show or hide modal
  const setShowModal = function (showModal) {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { showModal } });
  };

  // Expose state and functions to component
  return {
    likedPhotos: state.likedPhotos,
    selectedPhoto: state.selectedPhoto,
    showModal: state.showModal,
    photoData: state.photoData,
    topicData: state.topicData,
    getPhotosByTopics,
    setSelectedPhoto,
    setShowModal,
    toggleLikedPhotos,
  };
}
