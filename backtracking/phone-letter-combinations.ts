// 17. Letter Combinations of a Phone Number
// Medium

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:

// Input: digits = "2"
// Output: ["a","b","c"] 

// Constraints:

// 1 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

function letterCombinations(digits: string): string[] {
    const phoneDigits = new Map<string, string[]>();
    phoneDigits.set("2", ["a", "b", "c"])
    phoneDigits.set("3", ["d", "e", "f"])
    phoneDigits.set("4", ["g", "h", "i"])
    phoneDigits.set("5", ["j", "k", "l"])
    phoneDigits.set("6", ["m", "n", "o"])
    phoneDigits.set("7", ["p", "q", "r", "s"])
    phoneDigits.set("8", ["t", "u", "v"])
    phoneDigits.set("9", ["w", "x", "y", "z"])

    let result: string[] = [];

    function backtrack(index: number, current: string) {
        if (current.length === digits.length) {
            result.push(current);
            return;
        }

        const digit = digits[index]
        const letters: string[] = phoneDigits.get(digit) || []

        for (const letter of letters) {
            backtrack(index + 1, current + letter)
        }
    }

    backtrack(0, "")

    return result;
};


// Intuition
// Describe your first thoughts on how to solve this problem.
// I have spend a lot of time trying to come up with a brute force solution, but I got nowhere.
// Then, after 1.5 hours, I just gave up and started to search for the right solution, also, I've had already noticed that this problem makes part of backtracking category.
// So I specifically looked for backtracking logic using AI assistance. (It was amazing, the concept behind backtracking is awesome)

// Approach
// Basically, the base solution for this problem is using backtracking logic, recursively checking all possible paths, 
// and then saving when reaching the longest path possible.
// The save part is defined by current letters length and the digits length.

// Complexity
// Time complexity:
// O(4^n) time complexity (exponential time), where n is the length of the digits.

// Space complexity:
// O(n) space complexity, where n is the length of the digits.