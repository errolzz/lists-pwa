import { LISTS } from '../constants/constants';
import {
  addItemToList,
  setItemUpForDelete,
  deleteItemFromList,
  deleteListFromLists,
  setListUpForDelete,
  moveItemInList,
  toggleItemInList,
  toggleAllItemsInList,
  updateListInLists,
  createNewList,
  resetListActions,
} from '../utils';

// actions
const CLOSE_LIST = 'features/lists/CLOSE_LIST';
const SHOW_LIST = 'features/lists/SHOW_LIST';
const SHOW_LIST_FORM = 'features/lists/SHOW_LIST_FORM';
const CREATE_LIST = 'features/lists/CREATE_LIST';
const UPDATE_LIST = 'features/lists/UPDATE_LIST';
const ADD_ITEM = 'features/lists/ADD_ITEM';
const SHOW_DELETE_LIST = 'features/lists/SHOW_DELETE_LIST';
const DELETE_LIST = 'features/lists/DELETE_LIST';
const SHOW_DELETE_ITEM = 'features/lists/SHOW_DELETE_ITEM';
const DELETE_ITEM = 'features/lists/DELETE_ITEM';
const MOVE_ITEM = 'features/lists/MOVE_ITEM';
const TOGGLE_ITEM = 'features/lists/TOGGLE_ITEM';
const TOGGLE_ALL_ITEMS = 'features/lists/TOGGLE_ALL_ITEMS';

// initial state
const initialState = {
  lists: LISTS, // TODO: set up localStorage
  listId: undefined,
  isLoading: false,
  creatingList: false,
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SHOW_LIST:
      return {
        ...state,
        listId: action.listId,
      };
    case CLOSE_LIST:
      return {
        ...state,
        lists: resetListActions(state.lists),
        listId: undefined,
      };
    case SHOW_LIST_FORM:
      return {
        ...state,
        creatingList: action.creatingList,
      };
    case CREATE_LIST:
      return {
        ...state,
        lists: createNewList(state.lists, action.listData),
        creatingList: false,
      };
    case UPDATE_LIST:
      return {
        ...state,
        lists: updateListInLists(state.lists, action.listData),
        creatingList: false,
      };
    case ADD_ITEM:
      return {
        ...state,
        lists: addItemToList(state.lists, action.listId, action.item),
      };
    case SHOW_DELETE_LIST:
      return {
        ...state,
        lists: setListUpForDelete(state.lists, action.listId, action.value),
      };
    case DELETE_LIST:
      return {
        ...state,
        lists: deleteListFromLists(state.lists, action.listId),
        listId: undefined,
      };
    case SHOW_DELETE_ITEM:
      return {
        ...state,
        lists: setItemUpForDelete(state.lists, action.listId, action.itemId),
      };
    case DELETE_ITEM:
      return {
        ...state,
        lists: deleteItemFromList(state.lists, action.listId, action.itemId),
      };
    case MOVE_ITEM:
      return {
        ...state,
        lists: moveItemInList(state.lists, action.listId, action.oldIndex, action.newIndex),
      };
    case TOGGLE_ITEM:
      return {
        ...state,
        lists: toggleItemInList(state.lists, action.listId, action.itemId),
      };
    case TOGGLE_ALL_ITEMS:
      return {
        ...state,
        lists: toggleAllItemsInList(state.lists, action.listId, action.value),
      };
    default: return state;
  }
}

// syncronous (instant) action creators
export function showList(listId) {
  return { type: SHOW_LIST, listId };
}

export function closeList() {
  return { type: CLOSE_LIST };
}

export function showListForm(creatingList) {
  return { type: SHOW_LIST_FORM, creatingList };
}

export function createList(listData) {
  return { type: CREATE_LIST, listData };
}

export function updateList(listData) {
  return { type: UPDATE_LIST, listData };
}

export function addItem(listId, item) {
  return { type: ADD_ITEM, listId, item };
}

export function showDeleteItem(listId, itemId) {
  return { type: SHOW_DELETE_ITEM, listId, itemId };
}

export function showDeleteList(listId, value) {
  return { type: SHOW_DELETE_LIST, listId, value };
}

export function deleteList(listId) {
  return { type: DELETE_LIST, listId };
}

export function deleteItem(listId, itemId) {
  return { type: DELETE_ITEM, listId, itemId };
}

export function moveItem(listId, oldIndex, newIndex) {
  return { type: MOVE_ITEM, listId, oldIndex, newIndex };
}

export function toggleItem(listId, itemId) {
  return { type: TOGGLE_ITEM, listId, itemId };
}

export function toggleAllItems(listId, value) {
  return { type: TOGGLE_ALL_ITEMS, listId, value };
}
