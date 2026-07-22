class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = [];
        const sortedNums = nums.sort((a, b) => a - b);

        for (let i = 0; i < sortedNums.length - 2; i++) {
            if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

            let j = i + 1;
            let k = sortedNums.length - 1;

            while (j < k) {
                let sum = sortedNums[j] + sortedNums[k];
                let target = -sortedNums[i];

                if (sum < target) {
                    j++;
                } else if (sum > target) {
                    k--;
                } else {
                    result.push([sortedNums[i], sortedNums[j], sortedNums[k]]);

                    j++;
                    k--;

                    while (j < k && sortedNums[j] === sortedNums[j - 1]) j++;
                    while (j < k && sortedNums[k] === sortedNums[k + 1]) k--;
                }
            }
        }

        return result;
    }
}
