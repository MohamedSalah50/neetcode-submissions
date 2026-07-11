class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [];
        let suffix = [];

        for (let i = nums.length - 1; i >= 0; i--) {
            if (i == nums.length - 1) {
                suffix[nums.length - 1] = 1;
            } else {
                suffix[i] = suffix[i + 1] * nums[i + 1];
            }
        }

        for (let i = 0; i < nums.length; i++) {
            if (i == 0) {
                prefix[0] = 1;
            } else {
                prefix[i] = prefix[i - 1] * nums[i - 1];
            }
        }

        return prefix.map((num, i) => num * suffix[i]);
    }
}
