type Combinable = number | string; //   Type Alias / Custom type
type Conversor = 'as-number' | 'as-text'; //  Alias / Custom type

const combine = (
  input1: Combinable,
  input2: number | string,
  resultConversion: Conversor
) => {
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
};

console.log(combine(2, 5, 'as-number'));
console.log(combine('26 ', '32', 'as-number'));
console.log(combine('Pedro ', 'Machado', 'as-text'));
