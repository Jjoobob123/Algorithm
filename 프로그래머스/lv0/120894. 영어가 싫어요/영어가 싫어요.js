function solution(numbers) {
  const stringNumber = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  
  stringNumber.forEach((item,i) => {
    numbers = numbers.split(item).join(String(i))
  })
    return Number(numbers)
}