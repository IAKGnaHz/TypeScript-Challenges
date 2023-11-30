
/**
 * English Title: Find Missing Number
 * 
 * Description: Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
 * 
 * Example:
 * Input: [3,0,1]
 * Output: 2
 * 
 * Input: [9,6,4,2,3,5,7,0,1]
 * Output: 8
 */

function findMissingNumber(nums: number[]): number {
  const n = nums.length;
  let sum = (n * (n + 1)) / 2;
  for (let i = 0; i < n; i++) {
    sum -= nums[i];
  }
  return sum;
}