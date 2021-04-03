//find no. of vowels(a,e,i,o,u) in a string

//ex vowelsCount('why') --> 0


//sol 1

vowelsCount = (str) => {
    let count = 0;

    for (let char of str) {
        if ('aeiou'.includes(char.toLowerCase())) {
            count++
        }
    }
    console.log(count)
    return count;

}

vowelsCount('hi there')




//sol 2
vowelsCount = (str) => {
    let count = 0;

    const matchedArray = str.match(/[aeiou]/gi);

    if (matchedArray) {
        count = matchedArray.length;
    }

    return count


}

console.log(vowelsCount('why'))