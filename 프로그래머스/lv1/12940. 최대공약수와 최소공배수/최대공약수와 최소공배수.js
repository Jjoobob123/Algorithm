function solution(n, m) {
    
    let max = 0; // 공약수 중에서 가장 큰 값
    //최대공약수 구하기
    for(let i = 1; i <= m; i++){
        // console.log( i , n%i,m%i)
        if(n % i === 0 && m % i === 0){
            max =i
        }
    }
    //최소공배수 구하기
    let min = 0;
    for(let i = m ;i <= n*m; i += m){
        if( i%n === 0){
            min = i;
            break;
        }
    }
    console.log(min, max)
    return [ max, min]
}