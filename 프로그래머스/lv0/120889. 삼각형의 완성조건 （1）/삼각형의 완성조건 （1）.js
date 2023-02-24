function solution(sides) {
    // 가장 큰 변의 길이는 다른 두변의 길이보다 합이 작아야 한다.
    // 삼각형을 경우 1 삼각형이 되지 않는다면 2
  const aaa = sides.sort((a,b) => {return a - b})
  // console.log(aaa)
 if(aaa[2] < aaa[1] + aaa[0]){
   return 1
 }else {
   return 2
 }
  
  
}