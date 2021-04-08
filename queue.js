//Create a queue
//with class with methods
// const q = new Queue();
//  q.add(1)
//q.remove() -->return 1


class Queue {

    constructor() {
        this.data = []

    }

    add(data) {
        this.data.unshift(data)

    }

    remove() {
        return this.data.pop()
    }


}


const q = new Queue()

q.add(2)
q.add(3)

console.log(q.remove())