// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // This is a Tuple -> array with exactly 2 elements, first with number, second with string
// } = {
//   name: 'Pedro',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'], // Array of strings
//   role: [2, 'author']
// };

enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: 'Pedro',
  age: 30,
  hobbies: ['Sports', 'Cooking'], // Array of strings
  role: Role.ADMIN
};

// person.role.push('admin'); // Typsecript does not detect that we are pushing a third element to the Tuple, we should not do this though
// person.role[1] = 10; --> this is not allowed because person.role[1] has to be a string as defined in the Tuple

let favoriteActivities: string[]; //array of strings
favoriteActivities = ['sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toLowerCase());
}

if (person.role === Role.ADMIN) {
  console.log('is author');
}
