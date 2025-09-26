// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1] 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

function twoSum(nums: number[], target: number): number[] {
    let highest = target;
    let result: number[] = [];

    let left = 0;
    let right = 1;
    
    while (left < nums.length - 1) {
        if (right === nums.length) {
            left++
            right = left + 1
        }

        let leftPointer = nums[left]
        let rightPointer = nums[right];

        const numSum = leftPointer + rightPointer;

        if (numSum >= highest && numSum <= target) {
            highest = numSum;
            [...result] = [left, right] 
        }
        
        right++
    }

    return result;
};

// Comments
// The solution above has time complexity of O(n^2), even though having only while loop, 
// it iterates through the array using left variable n times (I thought I was cracking it with O(n) time complexity, like a badass dev XD)
// I had in mind that I needed to iterate each element to find the two closest indexes or equal to the target.
// But I was totally mistaken, I didn't read carefully the description.

// First error: I didn't notice that the target would always be equal to the sum of two numbers among the array

// Second: First solution first (it is related to the first error), as soon as I find the target when summing numbers, I should have had returned it. 
// My thoughts were: ok, I found the first solution, but I need to return the least two indexes that are closest to the target, not the first right away

// Third: One more perception error, I also didn't realize that nums array could be negative, pay close attention to the variable parameters scope next time Xd

// Anyway, the errors committed just helped me to learn how leetcodes are tricky, I'll come next time with the optmized solution