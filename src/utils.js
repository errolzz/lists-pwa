export function addItemToList(lists, listId, item) {
  const newLists = lists.slice();
  const listToAddTo = newLists.find(list => list.id === listId);
  listToAddTo.push(item);
  return newLists;
}

export function setItemUpForDelete(lists, listId, itemId) {
  const newLists = lists.slice();
  const listToDeleteFrom = newLists.find(list => list.id === listId);
  const foundItem = listToDeleteFrom.items.find(item => item.id === itemId);
  foundItem.deleting = true;
  return newLists;
}

export function setListUpForDelete(lists, listId, value) {
  const newLists = lists.slice();
  const listToDelete = newLists.find(list => list.id === listId);
  listToDelete.deleting = value;
  return newLists;
}

export function deleteListFromLists(lists, listId) {
  const newLists = lists.slice();
  newLists.forEach((list, index) => {
    if (list.id === listId) {
      newLists.splice(index, 1);
    }
  });
  return newLists;
}

export function deleteItemFromList(lists, listId, itemId) {
  const newLists = lists.slice();
  const listToDeleteFrom = newLists.find(list => list.id === listId);
  listToDeleteFrom.items.forEach((item, index) => {
    if (item.id === itemId) {
      listToDeleteFrom.items.splice(index, 1);
    }
  });
  return newLists;
}

export function moveItemInList(lists, listId, itemId, oldIndex, newIndex) {
  const newLists = lists.slice();
  const listToMoveAround = newLists.find(list => list.id === listId);
  while (oldIndex < 0) {
    oldIndex += listToMoveAround.items.length;
  }
  while (newIndex < 0) {
    newIndex += listToMoveAround.items.length;
  }
  if (newIndex >= listToMoveAround.items.length) {
    var k = newIndex - listToMoveAround.items.length + 1;
    while (k--) {
      listToMoveAround.items.push(undefined);
    }
  }
  listToMoveAround.items.splice(newIndex, 0, listToMoveAround.items.splice(oldIndex, 1)[0]);
  return newLists;
}

export function toggleItemInList(lists, listId, itemId, value) {

}

export function toggleAllItemsInList(lists, listId, value) {

}

export function updateListInLists(lists, listData) {
  return lists;
}
