console.log(Math.max(200, 293, 289));
console.log(Math.max.apply(null, [200, 293, 289]));
console.log(Math.max.apply(0, [200, 293, 289]));
console.log(Math.max.apply('', [200, 293, 289]));

/**
 * We can use Math.max function to find max from an array using apply() method
 */