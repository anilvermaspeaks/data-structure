//sum number from 1 to n


//sol 1

const sum = (n) => {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total = total + i;
    }

    return total

}


console.log(sum(10))


//sol 2
const sum = (n) => {

    return n * (n + 1) / 2

}


console.log(sum(10))


// faster code testing 

const sum = (n) => {

    return n * (n + 1) / 2

}


const t1 = performance.now();

console.log(sum(10))

const t2 = performance.now();

console.log((t2 - t1) / 1000)


//warnings
// diffrent machines will record diffrent timings
//even same machine will also record diffrent timmings

// but result will be not aposite
// but still this way is not precise enough





// count operations with diffrent sol

// more operation will take more time
// in sol 2 only 3 operation 
//n * (n + 1) / 2
//1. multiplication
//2. addition
//3. divison
//does not impacted by number of argument size 

// in sol 1,  operation depend on n. of argument, so atleast 2n and atmost  5n + 2 operation will take place