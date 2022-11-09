var replaceSpace = function (s) {
    const arr = Array.from(s);
    console.log(arr);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') { count++; }
    }
    console.log(count);
    let f = arr.length + count * 2 - 1;
    console.log(f);
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr);
        if (arr[i] === ' ') {
            arr[f--] = '0';
            arr[f--] = '2';
            arr[f--] = '%';
        } else {
            arr[f] = arr[i];
            f--;
        }
    }
    return arr.join('')
};

replaceSpace("We are happy.")