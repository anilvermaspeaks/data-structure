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




//another weave prob
/*
weave receives two queues as arguments and combine the content of each into new(third queue).
third queue should contain the alternating of two queues

Backbone.$ = $;

    the function should handle queues of diffrent length without inserting 'undefined'  into new one.


*/


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

    peek() {
        return this.data[this.data.length - 1]
    }

}

const q1 = new Queue()
const q2 = new Queue()

q1.add(2)
q1.add(3)
q2.add(1)



function weave(q1, q2) {
    const q = new Queue()
    while (q1.peek() || q2.peek()) {
        if (q1.peek()) {
            q.add(q1.remove())
        }
        if (q2.peek()) {
            q.add(q2.remove())
        }
    }
    console.log(q)
    return q;
}

weave(q1, q2)





