/**
 * HACKERRANK - 
 Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No

Function Description

Complete the checkMagazine function in the editor below. It must print Yes if the note can be formed using the magazine, or No.

checkMagazine has the following parameters:

string magazine[m]: the words in the magazine
string note[n]: the words in the ransom note

Prints

string: either Yes or No, no return value is expected
Sample Input 0

6 4
give me one grand today night
give one grand today

Sample Output 0
Yes

Sample Input 1

6 5
two times three is not four
two times two is four

Sample Output 1
No

Sample Input 2

7 4
ive got a lovely bunch of coconuts
ive got some coconuts

Sample Output 2
No
 */

function checkMagazine(magazine, note) {
  // Write your code here
  //create two arrays consisting of words used in magazine and note
  //for each word in note, search the array of magazine, if not found, return false
  //if found, remove that word from magazine array and search for next word in note array.

  let result = 'Yes';
  for (let word of note) {
    let isWordPresent = magazine.find((wrd) => wrd === word);
    if (isWordPresent) {
      let index = magazine.indexOf(isWordPresent);
      magazine.splice(index, 1);
    } else {
      result = 'No'
      break;
    }
  }

  console.log(result);
}
