// 520. Detect Capital
// Easy

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false
 

// Constraints:

// 1 <= word.length <= 100
// word consists of lowercase and uppercase English letters.

function detectCapitalUse(word: string): boolean {
    const capitalWord = word.toUpperCase();

    // All letters capital case;
    if (word === capitalWord) {
        return true;
    }

    // All letters lowercase case
    const lowerWord = word.toLowerCase();
    if (word === lowerWord) {
        return true;
    }

    // The first letter is capital case.
    let result = false;

    for (let i = 0; i < word.length; i++) {
        const wordLetter = word[i];

        if (i === 0 && wordLetter === capitalWord[0]) {
            result = true;
            continue;
        }

        if (result && wordLetter === capitalWord[i]) {
            return false;
        }
    }

    return result;
};

// Intuition
// At first, I thought some altready optmized way to solve this problem, but I got nowhere.
// Then, I went with the brute force approach, iterating the entire word to check for the first letter capital case.

// Approach
// We have 3 possible cases to check, all letters capital case, all letters lowercase case and the first letter capital case.
// The first two cases are straightforward, for the first case, I just capitalized the entire word and compared with the original word.
// Same thing for the second case, but lowercase the entire word and compared with the original word.
// For the third one, I had to iterate through the word to check if the first letter was the only one capital case.

// Complexity
// Time complexity:
// O(n) time complexity (linear time), where n is the length of the word.

// Space complexity:
// O(1) space complexity, no extra space is used.

