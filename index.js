function positiveOrZero(value) {
  if(typeof value === 'number' && value > 0) return value
  return 0
}

module.exports = positiveOrZero