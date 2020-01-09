/*
 * **Plus Minus**
 *
 * Given an array of integers, calculate the fractions of its elements that are positive, negative,
 * and are zeros. Print the decimal value of each fraction on a new line.
 *
 * https://www.hackerrank.com/challenges/plus-minus/problem
 */

const numsArray = [-1, 0, 1, 5];

const negatives = [];
const zeros = [];
const positives = [];

numsArray.forEach(el => {
  if (el < 0) {
    negatives.push(el);
  } else if (el === 0) {
    zeros.push(el);
  } else if (el > 0) {
    positives.push(el);
  }
});

if (numsArray.length > 0) {
  console.log(`Menores: ${(negatives.length / numsArray.length).toFixed(2)}`);
  console.log(`Iguais a zero: ${(zeros.length / numsArray.length).toFixed(2)}`);
  console.log(`Maiores: ${(positives.length / numsArray.length).toFixed(2)}`);
} else {
  console.log(`Menores: 0,00`);
  console.log(`Iguais a zero: 0,00`);
  console.log(`Maiores: 0,00`);
}

//complexidade N = pois varia de acordo com os numeros de array
//espaço = 1, pois ocupa apenas um numero na memoria (pode adicionar quantos numeros no array quiser o espaço continuar sendo 1)
