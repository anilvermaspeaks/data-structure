//check if two provided strings are anagrams of eachOther
//one string is an anagram of another if it uses the same characters
// in the same quantity. only consider charcters not spaces, punctuation
//consider capital letters to be the same as lower case
//anagrams('rail safety', 'fairy tales')==>true
//anagram('Rail safety', 'fairy tales')==>true



//Sol1
function anagram(str1, str2) {
    let updatedStr1 = str1.replace(/[^\w]/g, "").toLowerCase()
    let updatedStr2 = str2.replace(/[^\w]/g, "").toLowerCase()
    if (updatedStr1.length !== updatedStr2.length) {
        return false
    }
    else {
        let charMap = {}
        let charMap1 = {}
        for (let char of updatedStr1) {
            charMap[char] = charMap[char] + 1 || 1

        }

        for (let char of updatedStr2) {
            charMap1[char] = charMap1[char] + 1 || 1

        }

        for (let char in charMap1) {
            if (charMap1[char] !== charMap[char]) {
                return false
            }
        }

        return true;
    }




}


console.log(anagram('Rail safety', 'faigggry tales'))


//sol 2

function anagram(str1, str2) {
    let updatedStr1 = str1.replace(/[^\w]/g, "").toLowerCase()
    let updatedStr2 = str2.replace(/[^\w]/g, "").toLowerCase()

    return updatedStr1.split("").sort().join("") === updatedStr2.split("").sort().join("")


}

console.log(anagram('Rail safety', 'fiaay tales'))