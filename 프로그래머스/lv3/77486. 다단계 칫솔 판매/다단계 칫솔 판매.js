const hash = new Map();
var edge;
var answer;

const DFS = (num, money)=> {
    const next = edge[num];
    
    const nextMoney = Math.floor(money * 0.1);
    const currentMoeny = money - nextMoney;
    answer[num] += currentMoeny;
    
    if(next !== null && nextMoney!== 0)
        DFS(next, nextMoney);
    
}

function solution(enroll, referral, seller, amount) {
    const len = enroll.length;
    
    for(let i=0;i<len;i++) {
        hash.set(enroll[i], i);
    }
    
    edge = Array(len);
    
    for(let i=0;i<len;i++) {
        const ref = referral[i];
        
        if(ref === '-'){
            edge[i] = null;
            continue;   
        }
        
        const num = hash.get(ref);
        edge[i] = num;
    }
    
    answer = Array(len).fill(0);
    
    const sellerCnt = seller.length;
    
    for(let i=0; i< sellerCnt; i++) {
        const sellerNum = hash.get(seller[i]);
        const money = amount[i] * 100;
        
        // 가격 계산 DFS
        DFS(sellerNum, money);
    }
    
    return answer;
}