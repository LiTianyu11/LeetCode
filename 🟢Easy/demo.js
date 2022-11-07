var canConstruct = function (ransomNote, magazine) {
  const strArr = new Array(26).fill(0),
    base = "a".charCodeAt();
  for (const s of magazine) {
    const index = s.charCodeAt() - base;
    strArr[index]++;
  }
  for (const s of ransomNote) {
    const index = s.charCodeAt() - base;
    if (!strArr[index]) return false;
    strArr[index]--;
  }
  return true;
};
