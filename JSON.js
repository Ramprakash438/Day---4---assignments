// How to compare two JSON have the same properties without order?
// var obj1 = { name: "Person 1", age:5 };
// var obj2 = { age:5, name: "Person 1" };


var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

const object1 = Object.keys(obj1);
const object2 = Object.keys(obj2);

const result = (obj1, obj2) =>
 {

  if (object1.length === object2.length)
   {

    return object1.every(
        (element) => 
                    obj1[element] === obj2[element]
    );

  } 
  else 
  {
    return false;
  }
};
console.log(result(obj1, obj2));