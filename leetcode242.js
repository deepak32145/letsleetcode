var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }
  const charCountS = {};
  const charCountT = {};
  for (let char of s) {
    charCountS[char] = (charCountS[char] || 0) + 1;
  }
  for (let char of t) {
    charCountT[char] = (charCountT[char] || 0) + 1;
  }
  for (let char in charCountS) {
    if (charCountS[char] != charCountT[char]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
