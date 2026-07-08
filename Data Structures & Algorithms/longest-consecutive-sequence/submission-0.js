class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);

        let longestSequence = 0;
        for (const num of set) {
            if (!set.has(num - 1)) {
                let currentSequence = 1;
                while (set.has(num + currentSequence)) {
                    currentSequence++;
                }
                longestSequence = Math.max(longestSequence, currentSequence);
            }
        }
        return longestSequence;
    }
}
