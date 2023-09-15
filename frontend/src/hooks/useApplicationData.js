import { useReducer, useEffect } from "react";

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
      console.log(action.payload, "action.payload");
      return { ...state, photoData: action.payload };

    default:
      return state;
  }
}

export default function useApplicationData() {
  const initialState = {
    likedPhotos: [],
    selectedPhoto: null,
    selectedTopic: null,
    showModal: false,
    photoData: [],
    topicData: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((res) => {
        return res.json();
      })

      .then((res) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res });
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topicData: res } });
      });
  }, []);

  const toggleLikedPhotos = function (photoId) {
    if (!state.likedPhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photoId } });
    }
  };

  const getPhotosByTopics = function (selectedTopic) {
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

  const setSelectedPhoto = function (selectedPhoto) {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { selectedPhoto } });
  };

  const setShowModal = function (showModal) {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { showModal } });
  };

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
