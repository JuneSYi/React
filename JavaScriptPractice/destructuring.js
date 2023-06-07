const numbers = [1, 2, 3];
[num1, num3] = numbers;
// [num1, , num3] = numbers;
console.log(num1, num3);

const doubleNumArray = numbers.map((num) => {
  return num * 2;
});
console.log(numbers);
console.log(doubleNumArray);

function transformToObjects(numberArray) {
  // Todo: Add your logic
  // should return an array of objects
  const temp = numberArray.map((num) => {
    return { val: num };
  });
  console.log(temp);
  return temp;
}

const result = transformToObjects(numbers);
console.log(result);
