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
  let memory = {};
  function memoryCreation(i) {
    let value;
    if (i in memory) {
      value = memory[i];
    } else {
      if (i === 0 || i === 1) {
        value = i;
      } else {
        value = memoryCreation(i - 1) + memoryCreation(i - 2);
        memory[i] = value;
      }
    }
    return value;
  }
  return memoryCreation;
})();
quickSearchNumberFibonachi(80);
