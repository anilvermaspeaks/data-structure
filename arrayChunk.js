// Given an array and chunk size, divide the array into many subarrays
//where each subarray is length size
// chunk([1,2,3,4],2) ---> [[1,2],[3,4]]
//chunk([1,2,3,4,6,7,8],3) ---> [[1,2,3],[4,5,6],[7,8]]


//sol 1



function chunk(array, size) {
    let updatedArray = [];
    for (let ele of array) {
        let lastEle = updatedArray[updatedArray.length - 1];
        if (!lastEle || lastEle.length === size) {
            updatedArray.push([ele])
        }
        else {
            lastEle.push(ele)
        }
    }

    return updatedArray

}
console.log(chunk([1, 2, 3, 4, 5], 4))


//sol 2


function chunk(array, size) {
    let updatedArray = [];
    let index = 0;
    while (index < array.length) {
        updatedArray.push(array.slice(index, index + size))
        index += size;
    }

    return updatedArray

}
console.log(chunk([1, 2, 3, 4, 5], 4))
