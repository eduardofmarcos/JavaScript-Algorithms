/* Two elements add up to K */

/** 
Problem Two elements add up to K

This problem was recently asked by Google. Given a list of numbers and a number k, return whether any two numbers from the list add up to k. For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?

*/

const num = [1, 4];

const k = 5;

/*Solved with a nested loop */
(function() {
  function checkSum() {
    let sum = false;
    for (i = 0; i < num.length; i++) {
      let ref = num[i];
      num.forEach(el => {
        if (el + ref === k) {
          sum = true;
        }
      });
    }
    return sum;
  }
  const result = checkSum();
  console.log(result);
})();

/*Solved in one pass*/

(function() {
  const checkSum = () => {
    let sum = false;
    const existentNumbers = []; //[10]
    num.forEach(el => {
      let match = k - el;
      existentNumbers.push(el);
      if (existentNumbers.includes(match)) {
        sum = true;
      }
    });
    return sum;
  };

  const result = checkSum();
  console.log(result);
})();
