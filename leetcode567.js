var checkInclusion = function (s1, s2) {
  let len = s1.length;
  const substrings = [];
  for (let i = 0; i < s2.length - s1.length + 1; i++) {
    const str = s2.substr(i, len);
    if (isAnagram(s1, str)) {
      return true;
    }
  }
  return false;
};

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

console.log(checkInclusion("ab", "eidboaoo"));
