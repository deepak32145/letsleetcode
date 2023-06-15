var containsDuplicate = function (nums) {
  const duplicateArr = [];
  let unique = false;
  for (let i = 0; i < nums.length; i++) {
    if (duplicateArr.includes(nums[i])) {
      unique = true;
    } else {
      duplicateArr.push(nums[i]);
    }
  }

  return unique;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
