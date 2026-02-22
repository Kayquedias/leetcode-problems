
// 599. Minimum Index Sum of Two Lists
// Easy

// Given two arrays of strings list1 and list2, find the common strings with the least index sum.

// A common string is a string that appeared in both list1 and list2.

// A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

// Return all the common strings with the least index sum. Return the answer in any order.

 

// Example 1:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only common string is "Shogun".
// Example 2:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.
// Example 3:

// Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
// Output: ["sad","happy"]
// Explanation: There are three common strings:
// "happy" with index sum = (0 + 1) = 1.
// "sad" with index sum = (1 + 0) = 1.
// "good" with index sum = (2 + 2) = 4.
// The strings with the least index sum are "sad" and "happy".
 

// Constraints:

// 1 <= list1.length, list2.length <= 1000
// 1 <= list1[i].length, list2[i].length <= 30
// list1[i] and list2[i] consist of spaces ' ' and English letters.
// All the strings of list1 are unique.
// All the strings of list2 are unique.
// There is at least a common string between list1 and list2.

function findRestaurant(list1: string[], list2: string[]): string[] {
    const mappedList1 = new Map<string, number>();
    
    list1.forEach((item, index) => mappedList1.set(item, index))
    
    let result: string[] = []
    let minSum = 9999;

    for (let i = 0; i < list2.length; i++) {
        if (mappedList1.has(list2[i])) {
            const indexSum = mappedList1.get(list2[i])! + i

            if (minSum > indexSum) {
                result = [list2[i]];
                minSum = indexSum;
            } else if (minSum === indexSum) {
                result.push(list2[i]);
            }
        }
    }

    return result;
};

// Intuition
// Initially, my thoughts were to make a brute force approach, as I kept moving forward, I realized I got stucked.
// I couldn't come up with a logic to solve it in brute force, so I asked AI to help me without giving me the answer, just the concepts.
// then I progressed, using map structure, and the variable minSum.

// Approach
// I first divided the solution in 3 steps
// 1. find common strings
// 2. sum common string indexes and stick to the least one.
// 3. if common strings summed indexes are equal, then return them
// solving the second you automatically almost solve the third, if you want the most optimized solution, you need to use Hash Map structure.
// First I populate list1 hash map with its values, then I iterate through list2 looking for the common words.
// Then after I find a match, I need to check if the index sum (list1 word + list2 word) is smaller than the minSum variable; it (minSum variable) is going to be used to control the lesser index sum.
// if minSum is not smaller, then it might be equal to the minSum, in this case, we just increment the word to the result array. (for the previous case, we reinstantiate the result array with the only word found, also reset minSum variable to the current min sum)
// that's the logic for this leetcode problem, it was particularly more difficult for me, after solving it seems so easy /;

// Complexity
// Time complexity:
// O(n + m) time complexity (linear time)
// n = list1 size
// m = list2 size

// Space complexity:
// O(n) space complexity, where n is result variable size.
