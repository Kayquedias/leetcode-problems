# Unoptimized approach
# Time complexity: O(n^2)
# Space complexity: O(1)

class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        for idx, num in enumerate(nums):
            for idx2, num2 in enumerate(nums):
                if idx == idx2:
                    continue

                if num + num2 == target:
                    return [idx, idx2] if idx < idx2 else [idx2, idx]

# Optimized approach
#
#
