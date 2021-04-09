class Stack {

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


const s = new Stack()

s.add(2)
s.add(3)

console.log(s.remove())
