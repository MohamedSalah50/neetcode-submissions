class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const sortedCars = position
            .map((pos, index) => ({
                pos,
                t: (target - pos) / speed[index],
            }))
            .sort((a, b) => b.pos - a.pos);

        let fleets = 0,
            maxTime = 0;

        for (let i = 0; i < sortedCars.length; i++) {
            if (sortedCars[i].t > maxTime) {
                fleets++;
                maxTime = sortedCars[i].t;
            }
        }
        return fleets
    }
}
