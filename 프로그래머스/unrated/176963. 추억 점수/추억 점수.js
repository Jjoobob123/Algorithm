function solution(name, yearning, photos) {
  const answer = []

  for (const photo of photos) {
    let count = 0
    for (const man of photo) {
      if (name.includes(man)) count += yearning[name.indexOf(man)]
    }
    answer.push(count)
  }

  return answer
}