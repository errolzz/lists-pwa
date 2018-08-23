export const SETTINGS = {
  SITE_ROOT: '',
};

export const COLORS = {
  BLACK: '#111111',
  WHITE: '#FFFFFF',
  RED: '#FF0033',
  GREEN: '#33FF99',
};

export const LABELS = {
  CREATE_NEW_LIST: '+ Create New List',
};

export const HTTP = {
  LAST_API: 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=unsungslaughter&api_key=43cfd9f3b17f5a216e6601321ae7d0f5&limit=5&format=json',
};

export const LISTS = [
  {
    id: 'l0',
    title: 'List One',
    color: COLORS.RED,
    isChecklist: false,
    items: [
      {
        id: 'l0i0',
        title: 'Item Number One',
        done: false,
      },
      {
        id: 'l0i1',
        title: 'Item Number Two',
        done: false,
      },
      {
        id: 'l0i2',
        title: 'Item Number Three',
        done: false,
      },
      {
        id: 'l0i3',
        title: 'Number Four',
        done: false,
      },
    ],
  },
  {
    id: 'l1',
    title: 'List Two',
    color: COLORS.GREEN,
    isChecklist: false,
    items: [
      {
        id: 'l1i0',
        title: 'Item Number One',
        done: false,
      },
      {
        id: 'l1i1',
        title: 'Item Number Two',
        done: false,
      },
      {
        id: 'l1i2',
        title: 'Item Number Three',
        done: false,
      },
      {
        id: 'l1i3',
        title: 'Number Four',
        done: false,
      },
    ],
  },
];
