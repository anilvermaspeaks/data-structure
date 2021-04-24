// two array with values
// second array should have squre of values in first array 
// order does not matter

//arr1[1,4,6] arr2[1,36,16] true
//arr1[1,4,6] arr2[1,36] false
//arr1[1,4,6] arr2[1,16,36] true

//sol 1
function frequecyCounter(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex, 1)
    }
    return true;
}

frequecyCounter([1, 2, 3, 2], [9, 1, 4, 4])
