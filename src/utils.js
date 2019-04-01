export function pickInRange (from = 0, to = 1) {
  return Math.floor(Math.random() * (to - from + 1) + from)
}

export function pickFew (arr = [], quantity = 1) {
  if (arr.length < quantity) throw new Error('pickFew can not pick more items than an array has elements')
  let chosen = []
  let indices = []
  const itemsCount = arr.length - 1
  while (quantity) {
    const index = pickInRange(0, itemsCount)
    if (!indices.includes(index)) {
      indices.push(index)
      chosen.push(arr.slice(0)[index])
      quantity -= 1
    }
  }
  return chosen
}