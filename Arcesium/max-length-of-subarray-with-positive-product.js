/**
 * https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/
 * 

    Given an array of integers nums, find the maximum length of a subarray where the product of all its elements is positive.

    A subarray of an array is a consecutive sequence of zero or more values taken out of that array.

    Return the maximum length of a subarray with positive product.

    

    Example 1:

    Input: nums = [1,-2,-3,4]
    Output: 4
    Explanation: The array nums already has a positive product of 24.
    Example 2:

    Input: nums = [0,1,-2,-3,-4]
    Output: 3
    Explanation: The longest subarray with positive product is [1,-2,-3] which has a product of 6.
    Notice that we cannot include 0 in the subarray since that'll make the product 0 which is not positive.
    Example 3:

    Input: nums = [-1,-2,-3,0,1]
    Output: 2
    Explanation: The longest subarray with positive product is [-1,-2] or [-2,-3].

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

function getMaxLength (nums) {
  let positiveProductSubArrayLength = 0, negativeProductSubArrayLength = 0, answer = 0;

  for(let num of nums) {
    if(num == 0) {
      positiveProductSubArrayLength = 0;
      negativeProductSubArrayLength = 0;
    } else if(num > 0) {
      positiveProductSubArrayLength++;
      if(negativeProductSubArrayLength !== 0) {
        negativeProductSubArrayLength++;
      }
    } else {
      let temp = positiveProductSubArrayLength;
      positiveProductSubArrayLength = negativeProductSubArrayLength === 0 ? 0 : ++negativeProductSubArrayLength;
      negativeProductSubArrayLength = ++temp; // keeping track of negative because it can turn to positive product in future
    }
    answer = Math.max(answer, positiveProductSubArrayLength);
  }

  return answer;
}



/**
 * https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/discuss/820072/EASY-soultion-with-DRY-RUN-JAVA
 * 

    Intuition:
    At every iteration, tracking maximum length of positive multiplicative result and negative multiplicative result can help.
    Multiplicative Result : result(+ve/-ve) of multiplication of bunch of numbers(some of which can be +ve/-ve)

    Algorithm:

    If we see a 0, we gotta start off things again
    If we see a positive number :
    2.1. Increase length of positive mutilpicative result till now.
    2.2. Increase length of negative mutilpicative result till now, unless we had not encountered any negative before.
    If we see a negative number:
    3.1. It's time to swap positive and negative multiplicative results' lengths and do similar task as we did in above case.
    In each iteration, use the length of positive mutilpicative result to compute answer.


    Dry Run:

    elements      :   9    5    8    2    -6    4    -3    0    2    -5    15    10    -7    9    -2
    positive_len  :   1    2    3    4     0    1     7    0    1     0     1     2     5    6     5
    negative_len  :   0    0    0    0     5    6     2    0    0     2     3     4     3    4     7

    Answer : Max(all these positive_len values) => 7

*/