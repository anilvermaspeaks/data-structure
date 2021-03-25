//capitalize('a lazy fox')
//"A Lazy Fox"


//sol 1

function capitalize(str) {
    let sentence = []
    for (let word of str.split(" ")) {
        sentence.push(word[0].toUpperCase() + word.slice(1))

    }
    console.log(sentence.join(" "))

}

capitalize('a lazy fox')


//sol 2

function capitalize(str) {
    let sentence = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            sentence += str[i].toUpperCase();
        }
        else {
            sentence += str[i];
        }

    }

    console.log(sentence)


}

capitalize('a lazy fox')