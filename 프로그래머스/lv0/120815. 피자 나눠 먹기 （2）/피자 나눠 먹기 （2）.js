function solution(n) {
  // 나눠 먹을 사람의 수 n
  // 피자 한판당 6조각 
  // 피자 조각을 다 먹어야 한다면?
  // 6의 배수로 조건문을 다는것이 좋겠다.
  let count = 0
  let pizza = 6
  
  const gcd = (n,pizza) => {
    let r = n % pizza;
    return pizza === 0 ? n : gcd(pizza,r);
  }

  const aaa = gcd(n,pizza)
  
  
  const lcm = (n * pizza) / aaa
  return lcm / 6

}