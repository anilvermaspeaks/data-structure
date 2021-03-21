function maxChar(str) {
    let strObj = {};
    let max = 0;
    let maxChar = '';
    for (let char of str) {
        console.log(strObj[char])
        strObj[char] = strObj[char] + 1 || 1;
    }

    console.log(strObj)

    for (let char in strObj) {
        if (max < strObj[char]) {
            max = strObj[char];
            maxChar = char;
        }


    }

    console.log(max)
    console.log(maxChar)

}
maxChar('appppppple 1121345311')

