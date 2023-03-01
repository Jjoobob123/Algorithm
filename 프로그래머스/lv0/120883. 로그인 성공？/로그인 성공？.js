function solution(id_pw, db) {
    
    let answer = ''
    db.map((item) => 
           {if(item[0] === id_pw[0] && item[1] === id_pw[1]){
      answer = 'login'
    }else if (item[0] === id_pw[0] && item[1] !== id_pw[1]){
      answer = 'wrong pw'
    }else if(item[0] !== id_pw[0] && item[1] !== id_pw[1]){
      answer = 'fail'
    }
  }
          )                     
    
  return answer
  
}