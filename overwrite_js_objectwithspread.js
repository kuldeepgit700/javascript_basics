// spread operator with object

let students = {
  name: "kuleep",
  age: 20,
};

let newStudent = {
  ...students,
  name: "deepak",
};

console.log(newStudent);
