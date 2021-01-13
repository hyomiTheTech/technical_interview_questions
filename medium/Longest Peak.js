/* 

You may recall that an array arr is a mountain array if and only if:

arr.length >= 3
There exists some index i (0-indexed) with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given an integer array arr, return the length of the longest subarray, which is a mountain. Return 0 if there is no mountain subarray.

 

Example 1:

Input: arr = [2,1,4,7,3,2,5]
Output: 5
Explanation: The largest mountain is [1,4,7,3,2] which has length 5.
Example 2:

Input: arr = [2,2,2]
Output: 0
Explanation: There is no mountain.
 

Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 104
 

Follow up:

Can you solve it using only one pass?
Can you solve it in O(1) space?

*/

function longestPeak(array) {
  // Write your code here.
  let longestPeaks = 0;
  // iterate thru array and find the peak first.
  // if current element is bigger than the elements around, then its a peak
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i - 1] < array[i] && array[i] > array[i + 1]) {
      let left = 1;
      let right = 1;
      let leftIdx = i;
      let rightIdx = i;
      let currentPeak = 0;
      while (array[leftIdx - 1] > array[leftIdx - 2]) {
        left++;
        leftIdx--;
      }

      while (array[rightIdx + 1] > array[rightIdx + 2]) {
        right++;
        rightIdx++;
      }

      currentPeak = left + right + 1;
      if (currentPeak > longestPeaks) {
        longestPeaks = currentPeak;
      }
    }
  }

  return longestPeaks;
}
