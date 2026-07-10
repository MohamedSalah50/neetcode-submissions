class Solution {
    encode(strs) {
        let encoded = "";

        for (const str of strs) {
            encoded += str.length + "#" + str;
        }

        return encoded;
    }

    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            const length = Number(str.slice(i, j));
            const word = str.slice(j + 1, j + 1 + length);

            result.push(word);

            i = j + 1 + length;
        }

        return result;
    }
}