import { HTTP } from '../constants/constants';
import {
  addItemToListUpdate,
  deleteItemFromListUpdate,
  moveItemInListUpdate,
} from '../constants/constants';

// actions
const LOAD_LISTS = 'features/lists/LOAD_LISTS';
const SHOW_LIST = 'features/lists/SHOW_LIST';
const CREATE_LIST = 'features/lists/CREATE_LIST';
const ADD_ITEM = 'features/lists/ADD_ITEM';
const DELETE_ITEM = 'features/lists/DELETE_ITEM';
const MOVE_ITEM = 'features/lists/MOVE_ITEM';

// initial state
const initialState = {
  lists: [],
  listId: undefined,
  isLoading: false,
  creatingList: false,
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_LISTS:
      return {
        ...state,
        
      };
    case SHOW_LIST:
      return {
        ...state,
        listId: action.listId,
      };
    case CREATE_LIST:
      return {
        ...state,
        creatingList: action.creatingList,
      };
    case ADD_ITEM:
      return {
        ...state,
        lists: addItemToListUpdate(state.lists, action.listId, action.item),
      };
    case DELETE_ITEM:
      return {
        ...state,
        lists: deleteItemFromListUpdate(state.lists, action.listId, action.itemId),
      };
    case MOVE_ITEM:
      return {
        ...state,
        lists: moveItemInListUpdate(state.lists, action.listId, action.oldIndex, action.newIndex),
      };
    default: return state;
  }
}

// syncronous (instant) action creators
export function loadLists() {
  return { type: LOAD_LISTS };
}

export function showList(listId) {
  return { type: SHOW_LIST, listId };
}

export function createList(creatingList) {
  return { type: CREATE_LIST, creatingList };
}

export function addItem(listId, item) {
  return { type: ADD_ITEM, listId, item };
}

export function deleteItem(listId, itemId) {
  return { type: DELETE_ITEM, itemId };
}

export function moveItem(lsitId, oldIndex, newIndex) {
  return { type: MOVE_ITEM, oldIndex, newIndex };
}

/*
// asyncronous action creator
export function loadLastTrack() {
  return (dispatch) => {
    // dispatch to start a spinner or to disable mouse actions
    dispatch(loadLastTrackRequest());
    // load the data
    return fetch(HTTP.LAST_API)
      .then(response => response.json())
      .then(json =>
        // dispatched loaded data
        dispatch(loadLastTrackSuccess(json)))
      .catch(error =>
        // dispatched an http error occurred
        dispatch(loadLastTrackError(error)));
  };
}
*/
