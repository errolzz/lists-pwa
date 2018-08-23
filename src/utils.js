export function addItemToListUpdate(lists, listId, item) {
  const newLists = lists.slice();
  const listToAddTo = newLists.find(list => list.id === listId);
  listToAddTo.push(item);
  return newLists;
}

export function deleteItemFromListUpdate(lists, listId, itemId) {
  const newLists = lists.slice();
  const listToDeleteFrom = newLists.find(list => list.id === listId);
  const newList = listToDeleteFrom.slice();
  newList.find( (item, index) => {
    if (item.id === itemId) {
      newList.splice(index, 1);
      return;
    }
  });
  return newLists;
}

export function moveItemInListUpdate(lists, listId, itemId, oldIndex, newIndex) {
  const newLists = lists.slice();
  const listToMoveAround = newLists.find(list => list.id === listId);
  while (oldIndex < 0) {
    oldIndex += listToMoveAround.length;
  }
  while (newIndex < 0) {
    newIndex += listToMoveAround.length;
  }
  if (newIndex >= listToMoveAround.length) {
    var k = newIndex - listToMoveAround.length + 1;
    while (k--) {
      listToMoveAround.push(undefined);
    }
  }
  listToMoveAround.splice(newIndex, 0, listToMoveAround.splice(oldIndex, 1)[0]);
  return newLists;
}
