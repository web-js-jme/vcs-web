function sayHello() {
    console.log('hello');
}

function doWhat(func) {
   func('any');
}

module.exports = { doWhat }