function solution(number) {
    let result = 0;

    const combination = (current, start) => {
      // console.log(current,start)
      // console.log(current.length)
        if (current.length === 3) {
            result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
            return;
        }

        for (let i = start; i < number.length; i++) {
          // console.log([...current],[number[i]],start)
            combination([...current, number[i]], i + 1);
        }
    }
    combination([], 0);
    return result;
}