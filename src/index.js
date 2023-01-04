module.exports = function toReadable(number) {
    // function toReadable(number) {
    let numToStr = new Map([
        [1, "one"],
        [2, "two"],
        [3, "three"],
        [4, "four"],
        [5, "five"],
        [6, "six"],
        [7, "seven"],
        [8, "eight"],
        [9, "nine"],
        [10, "ten"],
        [11, "eleven"],
        [12, "twelve"],
        [13, "thirteen"],
        [14, "fourteen"],
        [15, "fifteen"],
        [16, "sixteen"],
        [17, "seventeen"],
        [18, "eighteen"],
        [19, "nineteen"],
        [20, "twenty"],
        [30, "thirty"],
        [40, "forty"],
        [50, "fifty"],
        [60, "sixty"],
        [70, "seventy"],
        [80, "eighty"],
        [90, "ninety"],
    ]);
    if (number === 0) return "zero";
    let res = [];
    if (number % 100 < 20) {
        res.unshift(number % 100 === 0 ? "" : numToStr.get(number % 100));
    } else {
        res.unshift(number % 10 === 0 ? "" : numToStr.get(number % 10));
        res.unshift(numToStr.get((Math.floor(number / 10) % 10) * 10));
    }
    if (number >= 100) {
        res.unshift("hundred");
        res.unshift(numToStr.get(Math.floor(number / 100)));
    }
    return res.join(" ").trim();
};

// console.log("1000".slice(-2, -1));
// console.log("'" + toReadable(655) + "'");
