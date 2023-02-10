
function solution(s) {
  let a = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for(let i =0; i<a.length; i++){
    s = s.replaceAll(a[i],i)
      console.log(s)
  }
  return Number(s)
}

