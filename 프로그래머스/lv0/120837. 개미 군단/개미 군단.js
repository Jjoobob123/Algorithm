function solution(hp) {
  // 장군개미 5 , 병정개미 3, 일개미 1
  // 최소한의 병력으로 hp 를 까라 
  
  let leader = (hp - (hp%5)) / 5
  hp = hp - (leader * 5)
  console.log(leader)
  let soldier = (hp - (hp%3)) / 3
  hp = hp - (soldier * 3)
  console.log(soldier)
  
  let ergate = (hp - (hp%1)) / 1
  hp = hp - (ergate * 1)
  console.log(ergate)
  
  return leader + soldier + ergate
}