//Q. Array Flatten using Custom Method
let arr = [
    [1, 2],
    [3, 4],
    [6, [7, 8], 9],
    [10, 11, 12]
]

function customFlatArray(arr, depth = 1) {
    let results = [];
    arr.forEach(ar => {
        if (Array.isArray(ar) && depth > 0) {
            results.push(...customFlatArray(ar, depth - 1))
        } else {
            results.push(ar)
        }
    })
    return results
}

console.log('flaten Array', customFlatArray(arr, 2))


//Q. Display Each Value of i inside setTimeOut by using Var (not let)
for (var i = 0; i < 3; i++) {
    function timer(num) {
        setTimeout(() => {
            console.log(num)
        }, num * 1000)
    }
    timer(i);
}

//Q. Call, Apply and Bind
var person = {
    name: 'Coder',
    hello: function (thing) {
        console.log(this.name + " is using " + thing)
    }
}

var newPerson = {
    name: 'rider'
}
person.hello.call(newPerson, 'call') // --> binds this with the object passed as argument

person.hello.apply(newPerson, ['apply']) // --> takes argument as array

const newValue = person.hello.bind(newPerson) // --> returns new function which can be called separately

newValue('world')

//Q. Infinite Currying a(1)(2).....(n)
function add(a) {
    return function (b) {
        if (b) return add(a + b)
        else return a
    }
}

console.log('infinite Currying', add(1)(2)(3)())

//Q. Composite Polyfill
function addFive(a) {
    return a + 5
}

function substractTwo(b) {
    return b - 2
}

function multiplyFour(c) {
    return c * 4
}

const compose = (...functions) => {
    return (args) => {
        return functions.reduceRight((arg, fn) => fn(arg), args) // --> to evaluate from right or you can use just reduce
    }
}

const evaluate = compose(addFive, substractTwo, multiplyFour)

console.log('Composite polyfill', evaluate(5))

//Q. Implement promise.all
function showText(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, time)
    })
}

const resolveAllPromise = (promises) => {
    let results = [];
    return new Promise((resolve, reject) => {
        let count = 0;
        promises.forEach((p) => {
            p.then(res => {
                results.push(res);

                count++;

                if (count === promises.length - 1) {
                    resolve(results)
                }
            }).catch(err => {
                reject(e)
            })
        })
    })
}

resolveAllPromise([
    showText('World', 1000),
    Promise.resolve('Javascript'),
    showText('hi', 10)
]).then(res => console.log('Promise All', res))
