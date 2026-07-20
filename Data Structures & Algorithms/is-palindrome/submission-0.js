class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let string = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");;

        let i = 0;
        let j = string.length - 1;

        while (i < j) {
            if (string[i] !== string[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
