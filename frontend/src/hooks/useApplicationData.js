import { useReducer, useState, useEffect } from 'react';


export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  SELECT_PHOTO: 'SELECT_PHOTO',
  SELECT_TOPIC: 'SELECT_TOPIC',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

// the way that useEffect works is that you give it a callback function and a list of dependencies. Whenever change in dependencies callback is called. 

// React is all about updating state so if some state changes useEffect - state might be dependencies of useEffect that could get triggered 

// If I plant a tree (tree was planted) we might have a useEffect responsible for watering the tree. This only happens when something is planted. 

// useEffect will always happen once, if it exists it will always happen once unless short circuited. Any changes to dependencies will cause it to run. 

// if I want to get all of the photos, presuming there's no logic to make me refetch. 



function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {...state, likedPhotos: [...state.likedPhotos, action.payload.photoId] } // we want to connect to line 48 on left 
        // payload is part of action to give you data you need 
    
    case ACTIONS.FAV_PHOTO_REMOVED:
      return{...state,likedPhotos: state.likedPhotos.filter((id) => id !== action.payload.photoId)}

    case ACTIONS.SELECT_PHOTO:
      return{...state, selectedPhoto: action.payload.selectedPhoto}

    case ACTIONS.SELECT_TOPIC:
      return{...state,selectedTopic: action.payload.selectedTopic}

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return{...state, showModal: action.payload.showModal  }

    case ACTIONS.SET_PHOTO_DATA:
      return{...state, photoData: action.payload }
      // this has a specific action type and a specific payload obj that it expects 

   case ACTIONS.SET_TOPIC_DATA:
      return{...state, topicData: action.payload.topicData}


    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      console.log(action.payload, "action.payload")
      return{...state, photoData: action.payload}
        

    default:
      return state
      // returning original state unmodified 
  }
}


export default function useApplicationData() {

// 
 


  // // for reducers start by creating an inital state 
  // const initialState = {
  //   likedPhotos : [],
  //   selectedPhoto: null,
  //   showModal: false
  // }

// modifying our initial state object in our custom hook to add keys for photos and topics.


const initialState = {
  likedPhotos : [],
  selectedPhoto: null,
  selectedTopic: null,
  showModal: false,
  photoData: [],
  topicData: [],

}

  
 const [state, dispatch] = useReducer(reducer, initialState);
// use reducer returns state and dispatch, state is whatever is has currently, it could be obj, num. Dispatch is just a function to trigger some sort of action and when dispatch occurs it goes to reducer function that I've defined. 
 

  //const [likedPhotos, setLikedPhotos] = useState([]);
  // const [selectedPhoto, setSelectedPhoto] = useState(null); 
  // const [showModal, setShowModal] = useState(false);

  useEffect(() => {
   fetch('http://localhost:8001/api/photos')
    //  .then(res => res.json())
    //  .then(data => { setItems([...data])
    .then((res) => {
    return res.json()})
    // invoking return immediately 
    .then(res => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res  })
    })
    // this gives us another promise 
    // Successful promise and error promise 
    // .then is an action after a successful promise, if .then is giving us another promise we can chain 

  }, [])
  
  useEffect(() => {
   fetch('http://localhost:8001/api/topics')
    //  .then(res => res.json())
    //  .then(data => { setItems([...data])
    .then(res => res.json()) // invoking return immediately 
    .then(res => {
      dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topicData : res } })
    })
    // this gives us another promise 
    // Successful promise and error promise 
    // .then is an action after a successful promise, if .then is giving us another promise we can chain 

  }, [])






  // useEffect(() => {
  //    console.log("State photoData", state.photoData)
  // }, [state.photoData])
  // runs once, dependencies changed, runs again 

 const toggleLikedPhotos = function(photoId) {
  if (!state.likedPhotos.includes(photoId)) {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId } });
    
    // the dispatch accepts one argument, it has a type and a payload, we trigger line 97, it goes up to reducer function, then the reducer function has some sort of logic, in this case it's a switch case, it takes payload and does something with it. 

    // line 28 - recieves a action so do something with the action, ...state - react always needs acopy of an object, copying likedPhotos array and adding payload item (action.payload.photoId)
  } else {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photoId } });
  }
};

const getPhotosByTopics = function(selectedTopic){

  fetch(`http://localhost:8001/api/topics/photos/${selectedTopic}`) 
    .then(res => {
      console.log(res, "fetch getPhotos")
      return res.json()}) // invoking return immediately 
    .then(resData => {
     console.log(resData, "above dispatch")
     return dispatch({type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: resData}) 
     // if you have multiline funciton in promise you need to return something (no implicit return)
    })
}

const setSelectedPhoto = function(selectedPhoto){
   dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { selectedPhoto } }); 
}



const setShowModal = function(showModal){
   dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: {showModal}}); 
}

  return {
    likedPhotos:state.likedPhotos, 
    selectedPhoto: state.selectedPhoto, 
    showModal: state.showModal, 
    photoData: state.photoData,
    topicData: state.topicData,
    // setLikedPhotos, 
    getPhotosByTopics,
    setSelectedPhoto, 
    setShowModal, 
    toggleLikedPhotos,
  };
}