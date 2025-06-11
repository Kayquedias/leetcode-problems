function missingNumber(nums: number[]): number {
    const [result] = nums.map((val, index) => {
        if (((val + index) == nums.length) === false) {
            return index + 1;
        }
    });

    return result || 0;
};