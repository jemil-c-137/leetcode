const givenArray1 = [10, 2, 5, 3]; // true
const givenArray2 = [3, 1, 7, 11]; // false
const givenArray3 = [-2, 0, 10, -19, 4, 6, -8]; // false;
const givenArray4 = [0, 0]; // true

function checkIfExist(arr: number[]): boolean {
  let isExist = false;
  first: for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      if (arr[i] === 2 * arr[j]) {
        isExist = true;
        console.log(arr[i], arr[j]);
        break first;
      }
    }
  }
  return isExist;
}

console.log(checkIfExist(givenArray1), 'first');
console.log(checkIfExist(givenArray2), 'second');
console.log(checkIfExist(givenArray3), 'third');
console.log(checkIfExist(givenArray4), 'fourth');
