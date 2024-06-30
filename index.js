// Combining Arrays
const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];
function combiningArrays(...arrays) {
    const groceries = [...arrays.flat()];
    return groceries;
  }
  console.log(combiningArrays(fruits, vegetables));

//   Cloning Objects
function cloningObjects(person) {
    const personCopy = { ...person };
    return personCopy;
  }
const person = { name: "John", age: 30, address: "123 Main St", city: "New York" };
console.log(cloningObjects(person));
person.occupation = "Software Engineer";
const personCopy2 = cloningObjects(person);
console.log(personCopy2)

// Merging Objects:

function mergingObjects(object1, object2) {
    const mergedObject = { ...object1, ...object2 };
  return mergedObject;
}
const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };
const studentWithCourse = mergingObjects(student, course);
console.log(studentWithCourse);

// Combining Nested Arrays:

function combiningNestedArrays(...arrays) {
    const combinedArray = [].concat(...arrays);
  return combinedArray;
}
const array1 = [[1, 2], [3, 4], [5, 6]];
const array2 = [[7, 8], [9, 10], [11, 12]];
const array3 = [[13, 14], [15, 16]];
console.log(combiningNestedArrays(array1, array2));
console.log(combiningNestedArrays(array1, array2, array3));