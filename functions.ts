const add = (n1: number, n2: number) => n1 + n2;

const printResult = (
  num: number
): void /*This function does not return anything, the return type is 'void' */ => {
  console.log('Result: ' + num);
};

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  cb(n1 + n2);
};

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number; //combineValues should be a function that takes 2 parameters(each of the a number) and that returns a number
combineValues = add;
//combineValues = printResult; won't work after stating the type for combineValues
// combineValues = 5;
console.log(combineValues(2, 4));
addAndHandle(10, 12, printResult);
addAndHandle(500, 12, (num: number) => {
  console.log('Result: ' + num);
});
