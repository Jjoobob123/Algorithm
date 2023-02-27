function solution(num_list) {
  let aaa = 0
  let bbb = 0
  
  for(let i = 0; i < num_list.length;i++){
    // console.log(num_list[i])
    if(num_list[i] %2 === 0){
      aaa ++
    }else{
      bbb ++
    }
  }
  // console.log([aaa,bbb])
  return [aaa,bbb]
}