module.exports = function reverse(n) {
    let arr = [];
    (n < 0 ? arr = (-n).toString().split('') : arr = n.toString().split(''));
    let outputArr = [];
    for (let i = 0; i < n.toString().length; i += 1) {
        outputArr.push(arr[n.toString().length - 1 - i]);
    }
    return Number(outputArr.join(''));
}
