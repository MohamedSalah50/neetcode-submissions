class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Array(9).fill(0).map(() => new Set());
        const cols = new Array(9).fill(0).map(() => new Set());
        const boxes = new Array(9).fill(0).map(() => new Set());

        //2-)the loop

        for (let i = 0; i < rows.length; i++) {
            for (let j = 0; j < cols.length; j++) {
                const num = board[i][j];
                if (num !== ".") {
                    const currentBox = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                    if (rows[i].has(num) || cols[j].has(num) || boxes[currentBox].has(num)) {
                        return false;
                    }

                    rows[i].add(num);
                    cols[j].add(num);
                    boxes[currentBox].add(num);
                }
            }
        }

        return true;
    }
}
