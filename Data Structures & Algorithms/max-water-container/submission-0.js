class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let max = 0;

        while (left < right) {
            let currentWidth = right - left;
            let currentHeight = Math.min(heights[left], heights[right]);
            let currentArea = currentWidth * currentHeight;

            max = Math.max(max, currentArea);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return max;
    }
}
