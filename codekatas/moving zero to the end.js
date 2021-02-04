var moveZeros = function (arr) {
  let lwithout = []
  let count = 0
  for ([i, v] of arr.entries()) {
    if (v === 0) {
      count++
    } else {
      lwithout.push(v)
    }
  }
  for (var i = 0; i < count; i++) {
    lwithout.push(0)
  }
  return lwithout
}