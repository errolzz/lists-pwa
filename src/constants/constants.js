import PropTypes from 'prop-types';

export const SETTINGS = {
  SITE_ROOT: '/lists',
};

export const COLORS = [
  '#111111',
  '#FF0033',
  '#33FF99',
];

export const LABELS = {
  CREATE_NEW_LIST: '+',
  DELETE: 'Delete',
  DELETE_LIST: 'Delete list',
  EDIT: 'Edit',
  EDIT_NAME: 'Edit list name',
  DELETE_X: '+',
  RESET: 'Reset Checklist',
  ADD_ITEM: '',
  ADD_ITEM_ICON: '+',
  CONFIRM_DELETE: 'Are you sure?',
  YES: 'Yes',
  NO: 'No',
  MAKE_NEW: 'Make a new list',
  LIST_NAME: 'Enter list name',
  MAKE_CHECKLIST: 'Set as checklist',
  APPLY_CHANGES: 'Apply changes',
  CREATE_LIST: 'Create list',
  CANCEL: 'Cancel',
};

export const PROPS = {
  LIST: {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    isChecklist: PropTypes.bool,
    deleting: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      done: PropTypes.bool,
      deleting: PropTypes.bool,
    })),
  },
};

export const LISTS = [
  {
    id: 'l0',
    title: 'List One',
    color: COLORS[0],
    isChecklist: false,
    deleting: false,
    items: [
      {
        id: 'l0i0',
        title: 'Item Number One',
        done: false,
        deleting: false,
      },
      {
        id: 'l0i1',
        title: 'Item Number Two',
        done: false,
        deleting: false,
      },
      {
        id: 'l0i2',
        title: 'Item Number Three',
        done: false,
        deleting: false,
      },
      {
        id: 'l0i3',
        title: 'Number Four',
        done: false,
        deleting: false,
      },
    ],
  },
  {
    id: 'l1',
    title: 'God Loves Himself!',
    color: COLORS[1],
    isChecklist: false,
    deleting: false,
    items: [
      {
        id: 'l1i0',
        title: 'Item Number One',
        done: false,
        deleting: false,
      },
      {
        id: 'l1i1',
        title: 'Item Number Two',
        done: false,
        deleting: false,
      },
      {
        id: 'l1i2',
        title: 'Item Number Three',
        done: false,
        deleting: false,
      },
      {
        id: 'l1i3',
        title: 'Number Four',
        done: false,
        deleting: false,
      },
    ],
  },
];
