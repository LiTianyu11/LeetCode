var isIsomorphic = function(s, t) {
    // Base case: for different length of two strings...
    if(s.length != t.length)
        return false;
    // Create two maps for s & t strings...
    let map1 = [];
    let map2 = [];
    // Traverse all elements through the loop...
    for(let idx = 0; idx < s.length; idx++){
        // Compare the maps, if not equal, return false...
       
        // Insert each character if string s and t into seperate map...
        map1[s.charAt(idx)] = idx + 1;
        map2[t.charAt(idx)] = idx + 1;

        console.log(`map1 : ${s.charAt(idx)}  ${map1[s.charAt(idx)]}`,map1)
        console.log(`map2 : ${t.charAt(idx)}  ${map2[t.charAt(idx)]}`,map2)
        
    }
};

//s = "egg", t = "add"


console.log(isIsomorphic("egg","add"))