var mergeTwoLists = function (list1, list2) {
  const newArr = [...list1, ...list2];
  return newArr.sort((a, b) => a - b);
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
