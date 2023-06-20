var longestConsecutive = function (nums) {
  if (nums.length == 0) {
    return 0;
  }
  if (nums.length == 1) {
    return 1;
  }
  const sorted = nums.sort((a, b) => a - b);
  let longestSequence = 1;
  let currentSequence = 1;
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] == sorted[i - 1] + 1) {
      currentSequence = currentSequence + 1;
    } else {
      currentSequence = 1;
    }
    longestSequence = Math.max(longestSequence, currentSequence);
  }
  return longestSequence;
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
