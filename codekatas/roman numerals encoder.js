function solution(number){
  const dict = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
  }
  let final = ""
  while (number > 0) {
    for (i in dict) {
      if (number >= dict[i]) {
        number -= dict[i]
        final += i
        break
      }
    }
  }
  return final
}
