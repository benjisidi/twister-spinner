class Test {
    constructor() {
        this.dict = {
            a: 1,
            b: 2
        }
    }
    twist() {
        Object.entries(this.dict).forEach(([key, val]) => {
            this.dict[key] = 4
        })
    }
}

const test = new Test()
console.log(test)
test.twist()
console.log(test)