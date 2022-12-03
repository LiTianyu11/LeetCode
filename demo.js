let john = { name: "John" };
let visitsCountObj = {};

let map = new Map(Object.entries(john));
console.log(map);
console.log(map.get("name"));
let obj = Object.fromEntries(map);
console.log(obj);

const [from, to] = ["sda", "sda"];
console.log(from)
console.log(typeof map)
console.log(obj instanceof Map)