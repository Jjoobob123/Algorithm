function solution(price) {
    // 머쓱이네 10만원 이상 5%, 30만원 이상 10% , 50만원 이상 20%
    // 소수점은 버린다. 내림인 floor 사용
    if(price >= 500000){
        return Math.floor(price*0.8)
    }else if(price >= 300000 && price < 500000){
        return Math.floor(price*0.9)
    }else if(price >= 100000 && price < 300000){
        return Math.floor(price*0.95)
    }else{
        return price
    }
}