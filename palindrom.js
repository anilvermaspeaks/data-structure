// sol 1 using string.spilit then array revers


//sol 2 using every
function palindrome(str) {

    return str.split('').every((char, i) => {
        return (char === str[str.length - 1 - i])
    })


}
console.log(palindrome('ababadd'))