const month = {
    1 : 31,
    2 : 29,
    3 : 31,
    4 : 30,
    5 : 31,
    6 : 30,
    7 : 31,
    8 : 31,
    9 : 30,
    10 : 31,
    11 : 30,
    12 : 31
}

const weekDay = ["FRI","SAT","SUN","MON","TUE","WED","THU"]

function solution(a, b) {
    const days = new Array(a)
                    .fill(1)
                    .reduce((acc,cur,i)=>{
                        const monthNum = cur +i
                        console.log(monthNum)
                        return acc + ((monthNum !== a
                                      //이전 월인 경우
                                       ? month[monthNum]
                                       //해당 월일 경우 ( a와 같은 경우)
                                       : b - 1
                                      )
                            
                                )
                    },0)
    return weekDay[days%7]
    
}