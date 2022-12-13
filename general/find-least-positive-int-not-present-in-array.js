/**
 * Write a function that accepts an array of integers and returns the least positive integer that is not present in the array
 * Ex: 1) [5,6,1,4,2,0] ----> 3
 *     2) [1,2,3] ----> 4
 *     3) [-6, -5, -1] ----> 1
 * @param {Array} A 
 * @returns 
 */

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let smallestInteger;
  let currentElement, previousElement;
  if (A.length > 0) {
    let sortedArray = sortArray(A);
    //console.log(sortedArray)
    previousElement = sortedArray[0];
    for (let i = 1; i < sortedArray.length; i++) {
      currentElement = sortedArray[i];
      if (currentElement > 0 && currentElement > previousElement + 1) {
        smallestInteger = previousElement + 1;
        break;
      }
      previousElement = currentElement;
    }
  }
  if (currentElement < 0)
    smallestInteger = 1;
  else if (currentElement === previousElement)
    smallestInteger = currentElement + 1;

  //console.log('small: ' + smallestInteger)
  return smallestInteger;
}

function sortArray(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let leftHalf = sortArray(arr.slice(0, middle));
  let rightHalf = sortArray(arr.slice(middle, arr.length));
  return sortedArr = mergeSortedArrays(leftHalf, rightHalf)
}

function mergeSortedArrays(firstArray, secondArray) {
  let i = 0, j = 0, result = [];

  for (i, j; i < firstArray.length && j < secondArray.length;) {
    if (firstArray[i] < secondArray[j]) {
      result.push(firstArray[i]);
      i++;
    } else {
      result.push(secondArray[j]);
      j++;
    }
  }
  while (i < firstArray.length) {
    result.push(firstArray[i]);
    i++;
  }
  while (j < secondArray.length) {
    result.push(secondArray[j]);
    j++;
  }

  return result;
}


