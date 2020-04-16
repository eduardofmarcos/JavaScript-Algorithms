//Recursion

const arrayToSum = [1, 4, [4, 1], 5];
const sumArray = (arrayToLoop, depth) => {
  let sum = 0;
  arrayToLoop.forEach(el => {
    if (Number.isInteger(el)) {
      sum = sum + el;
    } else if (Array.isArray(el)) {
      sum = sum + sumArray(el, depth + 1);
    }
  });
  return sum * depth;
};
const resultOfArray = sumArray(arrayToSum, 1);
console.log(resultOfArray);

//Time BigO(n) => where n is each elements of arrays..
//Space BigO(1) => it didn't create any addicional memory in space, but we could say too, considering the
//recursion, that is BigO(d) where d stands for depth. Because we are maintain in memory the execution
//on recursive functions.
