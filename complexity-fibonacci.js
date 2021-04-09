
//[0,1,1,2,3,5,8,13,21]

//sol 1
//linear  complexity
function fib(n) {

    const result = [0, 1]

    for (let i = 2; i <= n; i++) {
        const a = result[i - 1]
        const b = result[i - 2]

        result.push(a + b)
    }

    return result[n]

}



console.log(fib(7))


//sol 2
//recurssion exponential complexity
function fib(n) {

    if (n < 2) {
        return n
    }


    return fib(n - 1) + fib(n - 2)

}



console.log(fib(7))



//sol 3
//recurssion with memoization for less complexity with linear complexity
function memo(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;



    }
}


function fib(n) {

    if (n < 2) {
        return n
    }


    return fib(n - 1) + fib(n - 2)

}



fib = memo(fib)
console.log(fib(7))
