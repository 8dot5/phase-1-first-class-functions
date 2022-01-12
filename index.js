function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function anotherFunction() {
        // something
    }
}

returnsANamedFunction();

function returnsAnAnonymousFunction() {
    return function () {
        // something
    }
}

returnsAnAnonymousFunction();