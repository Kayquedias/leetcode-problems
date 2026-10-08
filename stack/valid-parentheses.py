# 20. Valid Parentheses
# Easy
# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.

# Example 1:

# Input: s = "()"
# Output: true

# Example 2:

# Input: s = "()[]{}"
# Output: true

# Example 3:

# Input: s = "(]"
# Output: false

# Example 4:

# Input: s = "([])"
# Output: true

# Example 5:

# Input: s = "([)]"
# Output: false

# Constraints:

# 1 <= s.length <= 104
# s consists of parentheses only '()[]{}'.

class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """

        stack = []
        mapping = { "}": "{", "]": "[", ")": "(" }

        for ch in s:
            if ch in mapping:
                if stack and stack[-1] == mapping[ch]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(ch)

        return not len(stack)

# Complexity
# Time complexity:
# O(n) time complexity (linear time), where n is the length of the s variable.

# Space complexity:
# O(n) space complexity, max stack depth when all are opening → O(n) worst case
