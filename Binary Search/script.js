//Binary Search

let array = [1, 2, 3, 4, 5, 6, 7, 8, 15, 40, 50];
let target = 40;
let left = 0;
let right = array.length - 1;

let middle = Math.floor((left + right) / 2);

function checkNum() {
  while (array.length > middle) {
    for (i = 0; i < 8; i++) {
      if (array[middle] === target) {
        return middle;
      }
      if (target < array[middle]) {
        right = middle - 1;
      }
      if (target > array[middle]) {
        left = middle + 1;
      }
      if (left > right) {
        return -1;
      }
      middle = Math.floor((left + right) / 2);
    }
  }
}

const resul = checkNum();
console.log(resul);

/* Complexity: time O(log(n))
logarithm performance */
