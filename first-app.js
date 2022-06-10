const person = {
    name: 'Max',
    age: 29,
    greet() {
      console.log('Hi, I am ' + this.name);
    }
  };
  
  const fruits = ['apple', 'oranges' , '', 'mango', '' , 'lemon'];
//   for (let fruit of fruits) {
//       console.log(fruit);
//   }
  console.log(fruits.map(fruit => 'Fruit: ' + fruit));
  console.log(fruits);
  
  