var add = (function () {
    var counter = 0;
    return function () {
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());

/**
 * JS Clouser
 * - A clouser is a function which have access to its parents scope even after the function has closes
 * - This is an IFFE: (function () { })();
 * - This is a clouser: function () { return ++counter; }
 * - It have access to its parent scope
 */