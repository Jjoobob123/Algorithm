function solution(i, j, k) {
 let count = 0
 for(let a = i; a <= j; a ++){
  count += [...(''+a)].filter(v => +v === k).length
   // console.log(count)
 }
     return count
   
}