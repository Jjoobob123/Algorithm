function solution(s) {
    s = s.toLowerCase()
         .split(" ")
         .map((str) => {
        return str === "" 
        ? str 
        : str[0].toUpperCase() + str.slice(1)
    })
    
    return s.join(" ")
}