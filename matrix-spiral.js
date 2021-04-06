//print n*n spiral matrix in js (n is positive )
//ex - matrix(2)
//[[1, 2], [4, 3]]

//ex - matrix(3)
//[[1, 2,3], [8, 9,4],[7,6,5]]



matrix = (n) => {
    const matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push([]);
        // matrix [[],[],[]]
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;


    while (startColumn <= endColumn && startRow <= endRow) {

        //top row
        for (let i = startColumn; i <= endColumn; i++) {
            matrix[startRow][i] = counter;
            counter++;
        }

        startRow++;

        //right column
        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endColumn] = counter;
            counter++;
        }

        endColumn--;

        //bottom row

        for (let i = endColumn; i >= startColumn; i--) {
            matrix[endRow][i] = counter;
            counter++;
        }

        endRow--;


        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startColumn] = counter;
            counter++;
        }

        startColumn++

    }

    console.log(matrix)

}


matrix(3)



// [[1, 2, 3],
// [8, 9, 4],
// [7, 6, 5]]