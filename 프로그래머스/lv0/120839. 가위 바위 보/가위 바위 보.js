function solution(rsp) {
    
    const win = {
   2 : 0,
   5 : 2,
   0 : 5,
 }
 
 return [...rsp].map(x => win[x]).join('')
}