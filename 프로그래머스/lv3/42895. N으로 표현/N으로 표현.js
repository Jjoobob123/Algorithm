const solution = (N, number) => {
    const nCountArr = Array.from(new Array(9), (value, idx) => idx === 0 ? new Set() :  new Set([parseInt(`${N}`.repeat(idx))]));
    for(let i = 1; i < 9; i++) {
        for (let j = 1; j < i; j++) {
            for (const value of nCountArr[j]) {
                for (const anotherValue of nCountArr[i-j]) {
                    nCountArr[i].add(value + anotherValue);
                    if (value - anotherValue > 0) {
                        nCountArr[i].add(value - anotherValue);
                    }
                    if (value * anotherValue <= number * N) {
                        nCountArr[i].add(value * anotherValue);
                    }
                    if ((value % anotherValue) === 0) {
                        nCountArr[i].add(value / anotherValue);
                    }
                }
            }
        }
        if (nCountArr[i].has(number)) return i;
    }
    return -1;
}