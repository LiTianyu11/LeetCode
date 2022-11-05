var arr = [
  { key: 'foo', val: 'bar' },
  { key: 'hello', val: 'world' }
];

var result = new Map(arr.map(i => [i.key, i.val]));
