// Sol#1
function reverse(str) {
    return str.split('').reverse().join('');
}
// Sol#2
rev = ''
for (let char of str) {
    rev = char + rev
}
// Sol#3
str.split('').reduce((a, b) => b + a, '')