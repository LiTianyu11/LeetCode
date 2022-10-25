var isIsomorphic = function (s, t) {
  

  const map1 = [256];
  const map2 = [256];

  for (let idx = 0; idx < s.length; idx++) {
    console.log("----------------");
    // console.log(
    //   `map1 : ${map1}, s.charAt(idx): ${s.charAt(idx)}, map1[s.charAt(idx)] : ${
    //     map1[s.charAt(idx)]
    //   }`
    // );
    console.log(map1, s.charAt(idx),map1[s.charAt(idx)] )
    map1[s.charAt(idx)] = idx + 1;
    console.log(map1, s.charAt(idx),map1[s.charAt(idx)] )
    // console.log(
    //   `map1 : ${map1}, s.charAt(idx): ${s.charAt(idx)}, map1[s.charAt(idx)] : ${
    //     map1[s.charAt(idx)]
    //   }`
    // );
  }
  return true;
};

isIsomorphic("aba", "abcdd");
