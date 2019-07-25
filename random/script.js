function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    // return Math.floor(Math.random() * (max - min + 1)) + min; // includes min and max
}

console.log(random(0, 100));