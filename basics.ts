const add = (n1: number, n2: number, showRes: boolean, phrase: string) => {
  if (showRes) {
    console.log(phrase, n1 + n2);
  } else {
    return n1 + n2;
  }
};
const numberOne = 5;
const numberTwo = 2.8;
const printRes = true;
const resultPhrase = 'Result is: ';

const result = add(numberOne, numberTwo, printRes, resultPhrase);
