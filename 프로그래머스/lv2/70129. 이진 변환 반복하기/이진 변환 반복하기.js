function solution(s) {
    // recursion 함수 (재귀함수)
    function recursion(s, [count,remove]){
       if( s === '1'){
           return [count, remove];
       }
        count++
        remove += s.split('').filter(el => el === '0').length
        s = s.split('').filter(el => el === '1').length
        s = s.toString( 2 )
        
        return recursion(s,[count,remove])
    }
    return recursion(s,[0,0]); // [count, remove]
}