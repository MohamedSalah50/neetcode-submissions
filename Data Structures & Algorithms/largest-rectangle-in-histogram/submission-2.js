class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = []; 
    let maxArea = 0;
    
    const extendedHeights = [...heights, 0];
    
    for (let i = 0; i < extendedHeights.length; i++) {
        while (stack.length > 0 && extendedHeights[stack[stack.length - 1]] > extendedHeights[i]) {
            const height = extendedHeights[stack.pop()];
            
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            
            maxArea = Math.max(maxArea, height * width);
        }
        
        stack.push(i);
    }
    
    return maxArea;
    }
}
