function solution(s, n) {
  let index_so = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let index_dae = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  let answer = '';
  let a = s.split('')
  for (let i = 0; i < a.length; i++) {
    
    if (a[i] === ' '){
      answer += ' '
    }else if (a[i] === a[i].toLowerCase()) {
      let x = (index_so.indexOf(a[i])+n)%26
      answer += index_so[x]
    }
    else if (a[i] === a[i].toUpperCase()){
      
      let y = (index_dae.indexOf(a[i])+n)%26
      answer += index_dae[y]
    }
  }
  return answer;
  
}
