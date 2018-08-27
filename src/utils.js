export function canBeReset(list) {
  let canBe = false;
  if (list.items.length > 0) {
    list.items.forEach((item) => {
      if (item.done) canBe = true;
    });
  }
  return canBe;
}

export function resetListActions(lists) {
  const newLists = lists.slice();
  newLists.forEach((list) => {
    list.deleting = false;
    list.items.forEach((item) => {
      item.deleting = false;
    });
  });
  return newLists;
}

export function addItemToList(lists, listId, item) {
  const newLists = lists.slice();
  const listToAddTo = newLists.find(list => list.id === listId);
  listToAddTo.items.push(item);
  return newLists;
}

export function setItemUpForDelete(lists, listId, itemId) {
  const newLists = lists.slice();
  const listToDeleteFrom = newLists.find(list => list.id === listId);
  const foundItem = listToDeleteFrom.items.find(item => item.id === itemId);
  foundItem.deleting = !foundItem.deleting;
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

export function moveItemInList(lists, listId, oldIndex, newIndex) {
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
  const newLists = lists.slice();
  const listToToggleItemIn = newLists.find(list => list.id === listId);
  const itemToToggle = listToToggleItemIn.items.find(item => item.id === itemId);
  itemToToggle.done = value || !itemToToggle.done;
  return newLists;
}

export function toggleAllItemsInList(lists, listId, value) {
  const newLists = lists.slice();
  const listToToggleItems = newLists.find(list => list.id === listId);
  listToToggleItems.items.forEach((item) => {
    item.done = value;
  });
  return newLists;
}

export function createNewList(lists, listData) {
  const newLists = lists.slice();
  newLists.push(listData);
  return newLists;
}

export function updateListInLists(lists, listData) {
  const newLists = lists.slice();
  const listToUpdate = newLists.find(list => list.id === listData.id);
  listToUpdate.title = listData.title;
  listToUpdate.color = listData.color;
  listToUpdate.isChecklist = listData.isChecklist;
  return newLists;
}

export function getUniqueId() {
  return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
}
