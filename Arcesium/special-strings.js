/**HACKERRANK
 * https://www.hackerrank.com/challenges/special-palindrome-again/problem?h_l=interview&h_r=next-challenge&h_v=zen&isFullScreen=true&playlist_slugs%5B%5D=arcesium
 * 
A string is said to be a special string if either of two conditions is met:

All of the characters are the same, e.g. aaa.
All characters except the middle one are the same, e.g. aadaa.
A special substring is any substring of a string which meets one of those criteria. Given a string, determine how many special substrings can be formed from it.

Example:
s = mnonopoo

Function Description

Complete the substrCount function in the editor below.

substrCount has the following parameter(s):

int n: the length of string s
string s: a string
Returns
- int: the number of special substrings

Input Format

The first line contains an integer, n, the length of s.
The second line contains the string s.
Sample Input 0

5
asasd
Sample Output 0

7 

Explanation 0
The special palindromic substrings of s = asasd are {a, s, a, s, d, asa, sas}
 */

function findSpecialString(num, str) {
  let count = 0;
  let numOfOperations = str.length - 1;
  for (let i = 1; i <= numOfOperations; i++) {
    let char = str[0];

    let result = true;
    for (let j = 0; j < num; j++) {
      if (str[j] !== char) {
        result = false;
      }
    }
    if (result) {
      count++;
    }
    str = str.slice(1)
  }

  return count;
}

function findPalindrome(num, str) { //3, abcbaba
  let count = 0;

  //1
  let middle = Math.floor(num / 2);
  let numOfOperations = str.length - 1; //6
  for (let i = 1; i <= numOfOperations; i++) {
    let char = str[0]; //b

    let result = true;
    for (let j = 1; j < num; j++) {
      if (j === middle) {
        continue;
      }

      if (str[j] !== char) {
        result = false;
      }
    }
    if (result) {
      count++;
    }
    str = str.slice(1)
  }

  return count;
}

// Complete the substrCount function below.
function substrCount(n, s) {
  //each character is a special substring
  //for even - find if same characters are sidebyside even number of times
  //for odd - find palindrome
  let totalSpecialStrings = 0;
  for (let i = 2; i <= s.length; i++) {
    let numOfSpecialStrings;
    if (i % 2 === 0) {
      numOfSpecialStrings = findSpecialString(i, s);
    } else {
      numOfSpecialStrings = findPalindrome(i, s)
    }
    totalSpecialStrings += numOfSpecialStrings;
  }

  return totalSpecialStrings + n;
}