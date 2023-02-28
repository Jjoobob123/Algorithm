function solution(n, words) {
    for(let i = 1; i < words.length; i++){
        // console.log(words[i],words[i-1])
        const player = ( i % n ) + 1
        const turn = Math.floor( i / n ) + 1
        const preWord = words[i - 1][ words[i - 1 ].length -1] // 이전사람이 말한 단어의 가장 뒷부분 (마지막 글자)
        const nowWord = words[i][0] // 현재 사람이 말한 단어의 가장 앞부분 (첫글자)
        
        if(nowWord !== preWord || words.indexOf(words[i] ) !== i){
            return [ player, turn]
        }
        
    }
    return [ 0 , 0]
}