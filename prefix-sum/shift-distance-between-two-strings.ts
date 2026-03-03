// 3361. Shift Distance Between Two Strings
// Medium

// You are given two strings s and t of the same length, and two integer arrays nextCost and previousCost.

// In one operation, you can pick any index i of s, and perform either one of the following actions:

// Shift s[i] to the next letter in the alphabet. If s[i] == 'z', you should replace it with 'a'. This operation costs nextCost[j] where j is the index of s[i] in the alphabet.
// Shift s[i] to the previous letter in the alphabet. If s[i] == 'a', you should replace it with 'z'. This operation costs previousCost[j] where j is the index of s[i] in the alphabet.
// The shift distance is the minimum total cost of operations required to transform s into t.

// Return the shift distance from s to t.

 

// Example 1:

// Input: s = "abab", t = "baba", nextCost = [100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], previousCost = [1,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

// Output: 2

// Explanation:

// We choose index i = 0 and shift s[0] 25 times to the previous character for a total cost of 1.
// We choose index i = 1 and shift s[1] 25 times to the next character for a total cost of 0.
// We choose index i = 2 and shift s[2] 25 times to the previous character for a total cost of 1.
// We choose index i = 3 and shift s[3] 25 times to the next character for a total cost of 0.
// Example 2:

// Input: s = "leet", t = "code", nextCost = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], previousCost = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

// Output: 31

// Explanation:

// We choose index i = 0 and shift s[0] 9 times to the previous character for a total cost of 9.
// We choose index i = 1 and shift s[1] 10 times to the next character for a total cost of 10.
// We choose index i = 2 and shift s[2] 1 time to the previous character for a total cost of 1.
// We choose index i = 3 and shift s[3] 11 times to the next character for a total cost of 11.
 

// Constraints:

// 1 <= s.length == t.length <= 105
// s and t consist only of lowercase English letters.
// nextCost.length == previousCost.length == 26
// 0 <= nextCost[i], previousCost[i] <= 109

function shiftDistance(s: string, t: string, nextCost: number[], previousCost: number[]): number {
    const prefixNext = new Array(27).fill(0);
    const prefixPrev = new Array(27).fill(0);

    for (let i = 0; i < 26; i++) {
        prefixNext[i + 1] = prefixNext[i] + nextCost[i]
        prefixPrev[i + 1] = prefixPrev[i] + previousCost[(i + 1) % 26]
    }

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const sIndex = convertCharToIndex(s[i])
        const tIndex = convertCharToIndex(t[i])

        let forwardCost;
        let backwardCost;
        
        // FORWARD 
        if (sIndex <= tIndex) {
            forwardCost = prefixNext[tIndex] - prefixNext[sIndex];
        } else {
            forwardCost = (prefixNext[26] - prefixNext[sIndex]) + prefixNext[tIndex]; 
        }

        // BACKWARD
        if (sIndex >= tIndex) {
            backwardCost = prefixPrev[sIndex] - prefixPrev[tIndex];
        } else {
            backwardCost =
                (prefixPrev[26] - prefixPrev[tIndex]) + prefixPrev[sIndex];
        }

        result += Math.min(forwardCost, backwardCost)
    }

    return result;
};

function convertCharToIndex(character: string): number {
    return character.charCodeAt(0) - "a".charCodeAt(0);
}

// Intuition
// My first approach was terrible, so I asked AI to help me without giving me the answer, just the concepts.
// Then I made progress by using prefix sums and the variable `result`.

// -> The first major problem while solving this was calculating the index of each character in the alphabet.
// I didn’t know that we could use the `charCodeAt` method to get the index of each character.

// -> Second, I was trying to iterate through the alphabet and thinking,
// "Okay, I have the character index. If I start the loop from the s index,
// I can calculate the cost of going forward, but what about backward? Will I need another loop?"
// So I started questioning the AI about these same doubts.

// -> Third, after understanding what prefix sums are and applying the logic to the solution,
// I was still getting incorrect outputs when submitting the tests.
// I tried changing the if/else logic for backward movement
// (since the error was specifically related to the backward cost calculation),
// but I still had no success.

// Then I stopped asking the AI and started debugging the error on my own.
// I went to the algo.monster website, and there I finally understood what was wrong.

// The mistake was right at the beginning: when calculating backward costs,
// I hadn’t added the modulo 26 and the +1 to the index calculation.

// It was a shock — but then, boom, the test submission was successful.
// And just like that, the solution was complete.

// Approach
// Convert each character to its alphabet index (a → 0, ..., z → 25).

// Precompute prefix sums for:
// nextCost (forward movement)
// previousCost (backward movement)

// For each position i:
// Compute forward cost (handle wrap if needed).
// Compute backward cost (handle wrap if needed).

// Add the minimum of both to the result.
// Return the total cost.

// Complexity
// Time complexity: O(n) time complexity (linear time)
// Space complexity: O(1) space complexity (constant space)