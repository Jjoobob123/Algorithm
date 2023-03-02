let aaa = 'aeiou'
function solution(my_string) {
    let zzz = [...my_string]
    let bbb = zzz.filter((item) =>  !aaa.includes(item))
    
    return bbb.join('')
    
}
