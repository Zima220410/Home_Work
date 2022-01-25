function getNumbersFibonachiBefore(num) {
  let arrayFib = [];
  arrayFib[0] = 0, arrayFib[1] = 1;
  for (let i = 2; i <= num; i++) {
    arrayFib[i] = arrayFib[i - 2] + arrayFib[i - 1];
  }
  return arrayFib;
}
getNumbersFibonachiBefore(15);



function showNumberFibonachiByNumber(num) {
  if (num <= 1) {
    return num;
  } else {
    return showNumberFibonachiByNumber(num - 1) + showNumberFibonachiByNumber(num - 2);
  }
}
showNumberFibonachiByNumber(10);



let quickSearchNumberFibonachi = (function () {
  let memo = {};
  function f(n) {
    let value;
    if (n in memo) {
      value = memo[n];
    } else {
      if (n === 0 || n === 1) {
        value = n;
      } else {
        value = f(n - 1) + f(n - 2);
        memo[n] = value;
      }
    }
    return value;
  }
  return f;
})();
quickSearchNumberFibonachi(80);
