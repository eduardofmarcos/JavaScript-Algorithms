// Problema apresentado em uma entrevista de Software Engineer no Facebook: dado uma string com expressões abertas e fechadas por colchetes, parênteses e chaves,
// retorne true se a formação estiver correta ou false do contrário.

// Exemplo:
// - [()] = true
// - [(]) = false

const expressao = "([]()()()()[]{}{}{}())";
const openIndexs = [];
const closeIndexs = [];
const opencolchetes = [];
const openchaves = [];
const openpar = [];
const fechacolchetes = [];
const fechachaves = [];
const fechapar = [];

const arrayExpression = expressao.split("");
arrayExpression.forEach((el, index) => {
  if (el === "[") {
    opencolchetes.push(el);
  } else if (el === "(") {
    openpar.push(el);
  } else if (el === "{") {
    openchaves.push(el);
  } else if (el === ")") {
    fechapar.push(el);
  } else if (el === "}") {
    fechachaves.push(el);
  } else if (el === "]") {
    fechacolchetes.push(el);
  }
});

let maior = [];
let menor = [];

arrayExpression.forEach((el, index) => {
  if (el === "(" || el === "{" || el === "[") {
    maior.push(el);
  }
  if (el === ")" || el === "}" || el === "]") {
    menor.push(el);
  }
});

const total =
  opencolchetes.length +
  openchaves.length +
  openpar.length -
  (fechacolchetes.length + fechapar.length + fechachaves.length);

if (total === 0) {
  for (i = 0; i < arrayExpression.length; i++) {
    if (arrayExpression[i] === "(") {
      if (
        arrayExpression[i + 1] === ")" ||
        arrayExpression[i + 1] === "{" ||
        arrayExpression[i + 1] === "["
      ) {
        sit = true;
      } else sit = false;
    }
    if (arrayExpression[i] === "[") {
      if (
        arrayExpression[i + 1] === "]" ||
        arrayExpression[i + 1] === "(" ||
        arrayExpression[i + 1] === "{"
      ) {
        sit = true;
      } else sit = false;
    }
    if (arrayExpression[i] === "{") {
      if (
        arrayExpression[i + 1] === "}" ||
        arrayExpression[i + 1] === "[" ||
        arrayExpression[i + 1] === "("
      ) {
        sit = true;
      } else sit = false;
    }
  }
} else sit = false;

console.log(sit);

/*******************************************/

// Problema apresentado em uma entrevista de Software Engineer no Facebook: dado uma string com expressões abertas e fechadas por colchetes, parênteses e chaves,
// retorne true se a formação estiver correta ou false do contrário.

// Exemplo:
// - [()] = true
// - [(]) = false

const array = ["[", "(", ")", "]", "(", ")"];
//const array = ["(", ")"];
const open = [];
const check = new Map();

const chaves = "{";
const parenteses = "(";
const colchetes = "[";

check.set(chaves, "}");
check.set(parenteses, ")");
check.set(colchetes, "]");

//console.log(check.get("("));
let sit = true;
function checkex() {
  for (i = 0; i < array.length; i++) {
    if (check.has(array[i])) {
      //console.log("ok");
      open.push(array[i]);
    } else {
      let lastOpened = open[open.length - 1];
      console.log("lastopendd: ", lastOpened); //(
      let openedMatch = check.get(lastOpened); //)
      console.log("opened match: ", openedMatch);
      console.log("el: ", array[i]);
      if (array[i] !== openedMatch) {
        return false;
      } else {
        open.pop();
      }
    }
  }
  if (open.length > 0) return false;
  return true;
}

const result = checkex();
console.log(result);
