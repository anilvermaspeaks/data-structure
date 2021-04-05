//function that accept a positive number N.
// should console log a pyramid shap
//with n levels using the # char. Make sure the pyramid
//has spaces on both left and right hand sides
//ex 
//pyramid(1)
// '# '
//pyramid (2)
// ' # '
// '###'
//pyramid (3)
// '  #  '
// ' ### '
// '#####' 


//sol. 1 

pyramid = (levels) => {
    const mid = Math.floor(((levels * 2) - 1) / 2)
    const char = '#';

    for (let x = 0; x < levels; x++) {
        let shape = '';
        for (let y = 0; y <= ((levels * 2) - 1); y++) {
            if (mid - x <= y && mid + x >= y) {

                shape = shape + char;
            }
            else {
                shape = shape + ' '
            }
        }

        console.log(shape)

    }
}
pyramid(6)


