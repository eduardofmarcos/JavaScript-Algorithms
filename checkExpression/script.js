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
