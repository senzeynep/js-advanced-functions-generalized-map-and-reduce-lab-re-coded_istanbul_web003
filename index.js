// map function

function map(array, callback) {
    let myArray = []
    for (let i = 0; i < array.length; i++) {
        myArray.push(callback(array[i]))
    }
    return myArray
}

// reduce function

function reduce(array, callback, startingValue) {
    if(startingValue != undefined) {
        return array.reduce(callback) + startingValue
    }
    return array.reduce(callback)
}