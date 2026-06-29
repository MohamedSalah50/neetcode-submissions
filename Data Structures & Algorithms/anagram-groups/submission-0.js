class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groups = {};

        for (const str of strs) {
            const sortedKey = str.split("").sort().join("");

            if (!groups[sortedKey]) {
                groups[sortedKey] = [];
            }

            groups[sortedKey].push(str);
        }
        return Object.values(groups);
    }
}
