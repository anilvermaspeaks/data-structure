//function that accept a positive number N.
// should console log a step shap
//with n levels using the # char. Make sure the steps
//has spaces on the right hand side
//ex 
//steps(2)
// '# '
// '##'
//steps (3)
// '#  '
// '## '
// '###'


//Sol. 1


steps = (levels) => {
    const char = '#';
    for (let x = 1; x <= levels; x++) {
        let step = '';
        for (let y = 1; y <= levels; y++) {

            if (y <= x) {
                step = step + char
            }
            else {
                step = step + ' '
            }
        }
        console.log(step)

    }
}
steps(5)
