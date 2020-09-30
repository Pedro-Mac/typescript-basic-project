let userInput: unknown;
let userName: string;

userInput = 5;
userInput = ['Max'];
//userName = userInput; //will not work because userInput is not gurateed to be a string
if (typeof userInput === 'string') {
  userName === userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('An error ocurred', 500);
