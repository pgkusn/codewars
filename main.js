/**
 * Gravity Flip
 * @param {string} d
 * @param {number[]} a
 * @returns {number[]}
 */
export function flip(d, a) {
  if (d === 'R') {
    return a.sort((a, b) => a - b)
  } else if (d === 'L') {
    return a.sort((a, b) => b - a)
  }

  // better
  // return a.sort((a, b) => (d === 'R' ? a - b : b - a))
}
/**
 * A wolf in sheep's clothing
 * @param {string[]} queue
 * @returns {string}
 */
export function warnTheSheep(queue) {
  const ary = [...queue].reverse()
  const n = ary.findIndex(item => item === 'wolf')
  return n === 0
    ? 'Pls go away and stop eating my sheep'
    : `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`

  // better
  // const n = [...queue].reverse().indexOf('wolf')
  // return n === 0
  //   ? 'Pls go away and stop eating my sheep'
  //   : `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`
}
/**
 * Total amount of points
 * @param {string[]} games
 * @returns {number}
 */
export function points(games) {
  return games.reduce((previousValue, currentValue) => {
    const [x, y] = currentValue.split(':')
    if (x > y) return previousValue + 3
    if (x < y) return previousValue
    if (x === y) return previousValue + 1
  }, 0)
}
/**
 * Sum of differences in array
 * @param {number[]} arr
 * @returns {number}
 */
export function sumOfDifferences(arr) {
  if (arr.length < 2) return 0
  const sortedArr = [...arr].sort((a, b) => b - a)
  return sortedArr.reduce((previousValue, currentValue, currentIndex) => {
    const next = sortedArr[currentIndex + 1]
    return previousValue + (currentValue - next || 0)
  }, 0)
}
/**
 * Multiple of index
 * @param {number[]} array
 * @returns {number[]}
 */
export function multipleOfIndex(array) {
  return array.filter((item, index) => (item === 0 ? true : item % index === 0))

  // better
  // return array.filter((item, index) => item === 0 || item % index === 0)
}
/**
 * CSV representation of array
 * @param {number[][]} array
 * @returns {string}
 */
export function toCsvText(array) {
  return array.map(item => item.join()).join('\n')

  // better
  // return array.join('\n')
}
/**
 * Array plus array
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number}
 */
export function arrayPlusArray(arr1, arr2) {
  const arr = [...arr1, ...arr2]
  return arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}
/**
 * Find the first non-consecutive number
 * @param {number[]} arr
 * @returns {(number|null)}
 */
export function firstNonConsecutive(arr) {
  return arr.find((n, i) => i && n - 1 !== arr[i - 1]) ?? null
}
/**
 * Find Multiples of a Number
 * @param {number} integer
 * @param {number} limit
 * @returns {number[]}
 */
export function findMultiples(integer, limit) {
  const result = []
  for (let n = integer; n <= limit; n += integer) {
    result.push(n)
  }
  return result
}
/**
 * Invert values
 * @param {number[]} array
 * @returns {number[]}
 */
export function invert(array) {
  return array.map(n => n * -1 || 0)

  // better
  // return array.map(n => -n || 0)
}
/**
 * Merge two sorted arrays into one
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
export function mergeArrays(arr1, arr2) {
  const setObj = new Set([...arr1, ...arr2])
  return Array.from(setObj).sort((a, b) => a - b)
}
/**
 * Duck Duck Goose
 * @param {object[]} players
 * @param {number} goose
 */
export function duckDuckGoose(players, goose) {
  return players[(goose - 1) % players.length].name
}
/**
 * Beginner - Lost Without a Map
 * @param {number[]} x
 * @returns {number[]}
 */
export function maps(x) {
  return x.map(n => n * 2)
}
/**
 * Beginner - Reduce but Grow
 * @param {number[]} x
 * @returns {number}
 */
export function grow(x) {
  return x.reduce((previousValue, currentValue, currentIndex) => {
    if (currentIndex === 0) return previousValue
    return previousValue * currentValue
  }, x[0])

  // better
  // return x.reduce((a, b) => a * b, 1)

  // best
  // return x.reduce((a, b) => a * b)
}
/**
 * To square(root) or not to square(root)
 * @param {number[]} array
 * @returns {number[]}
 */
export function squareOrSquareRoot(array) {
  return array.map(n => (Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : n ** 2))
}
/**
 * I love you, a little , a lot, passionately ... not at all
 * @param {number} nbPetals
 * @returns {string}
 */
export function howMuchILoveYou(nbPetals) {
  const phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
  return phrases[(nbPetals - 1) % phrases.length]
}
/**
 * Well of Ideas - Easy Version
 * @param {string[]} x
 * @returns {string}
 */
export function well(x) {
  const filtered = x.filter(item => item === 'good')
  if (filtered.length > 2) {
    return 'I smell a series!'
  } else if (filtered.length > 0) {
    return 'Publish!'
  } else {
    return 'Fail!'
  }
}
/**
 * Filter out the geese
 * @param {string[]} birds
 * @returns {string[]}
 */
export function gooseFilter(birds) {
  var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher']
  return birds.filter(item => !geese.includes(item))
}
/**
 * Sum Mixed Array
 * @param {(string | number)[]} x
 * @returns {number}
 */
export function sumMix(x) {
  return x.reduce((previousValue, currentValue) => {
    // @ts-ignore
    return previousValue + Number(currentValue)
  }, 0)

  // or
  // return x.map(a => +a).reduce((a, b) => a + b)
}
/**
 * Fake Binary
 * @param {string} x
 * @returns {string}
 */
export function fakeBin(x) {
  return x
    .split('')
    .map(n => (+n < 5 ? '0' : '1'))
    .join('')

  // or
  // @ts-ignore
  return x.replace(/\d/g, d => (d < 5 ? 0 : 1))
}
/**
 * Convert a string to an array
 * @param {string} string
 * @returns {string[]}
 */
export function stringToArray(string) {
  return string.split(' ')
}
/**
 * Is there a vowel in there?
 * @param {number[]} a
 * @returns {(number|string)[]}
 */
export function isVow(a) {
  const vowels = ['a', 'e', 'i', 'o', 'u'] // or 'aeiou'
  return a.map(n => {
    const s = String.fromCharCode(n)
    return vowels.includes(s) ? s : n
  })
}
/**
 * Sort and Star
 * @param {string[]} s
 * @returns {string}
 */
export function twoSort(s) {
  const sortedArray = [...s].sort()
  return sortedArray[0].split('').join('***')
}
/**
 * Calculate average
 * @param {number[]} array
 * @returns {number}
 */
export function findAverage(array) {
  const total = array.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  return total / array.length || 0
}
/**
 * Count of positives / sum of negatives
 * @param {number[]} input
 * @returns {number[]}
 */
export function countPositivesSumNegatives(input) {
  if (!input || !input.length) return []
  const positivesCount = input.filter(n => n > 0).length
  const negativeTotal = input
    .filter(n => n < 0)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  return [positivesCount, negativeTotal]
}
/**
 * Removing Elements
 * @param {array} arr - 要處理的陣列
 * @returns {array} - 移除後的陣列
 */
export function removeEveryOther(arr) {
  return arr.filter((value, index) => index % 2 === 0)
}
/**
 * Arguments to Binary addition
 * @param {array} arr - 包含數字和其他元素的陣列
 * @returns {string} - 總和的二進制表示
 */
export function arr2bin(arr) {
  // if (arr.includes(NaN)) return 'NaN'
  // const total = arr.reduce((previousValue, currentValue) => {
  //   // @ts-ignore
  //   return previousValue + (Number.isInteger(currentValue) ? currentValue : 0)
  // }, 0)
  // return total.toString(2)

  // better
  const total = arr.reduce((previousValue, currentValue) => {
    // @ts-ignore
    return previousValue + (typeof currentValue === 'number' ? currentValue : 0)
  }, 0)
  return total.toString(2)
}
/**
 * UEFA EURO 2016
 * @param {string[]} teams - 兩支球隊的名稱
 * @param {number[]} scores - 兩支球隊的得分
 * @returns {string} - 比賽結果字串
 */
export function uefaEuro2016(teams, scores) {
  const title = `At match ${teams[0]} - ${teams[1]}, `
  const max = Math.max(...scores)
  const min = Math.min(...scores)
  const winner = teams[scores.findIndex(n => n === max)]
  const result = max === min ? 'teams played draw.' : `${winner} won!`
  return title + result

  // or
  // const title = `At match ${teams[0]} - ${teams[1]}, `
  // const winner = scores[0] === scores[1] ? null : scores[0] > scores[1] ? teams[0] : teams[1]
  // const result = winner ? `${winner} won!` : 'teams played draw.'
  // return title + result
}
/**
 * pick a set of first elements
 * @param {array} arr - 要處理的序列
 * @param {number} n - 要返回的元素數量（預設值為 1）
 * @returns {array} - 第一個元素或前 n 個元素的序列
 */
export function first(arr, n = 1) {
  return arr.slice(0, n)
}
/**
 * Find the Difference in Age between Oldest and Youngest Family Members
 * @param {number[]} ages - 包含家庭成員年齡的陣列
 * @returns {number[]} - 包含最年輕年齡、最年長年齡和年齡差的陣列
 */
export function differenceInAges(ages) {
  const min = Math.min(...ages)
  const max = Math.max(...ages)
  return [min, max, max - min]
}
/**
 * Sum of positive
 * @param {number[]} arr - 輸入的數字陣列
 * @returns {number} - 所有正數的總和
 */
export function positiveSum(arr) {
  const positiveNumbers = arr.filter(n => n > 0)
  return positiveNumbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}
/**
 * Logical calculator
 * @param {boolean[]} array - 包含布林值的陣列
 * @param {string} op - 邏輯運算符，可選值為 "AND", "OR", "XOR"
 * @returns {boolean} - 計算結果的布林值
 */
export function logicalCalc(array, op) {
  return array.reduce((previous, current) => {
    if (op === 'AND') return previous && current
    if (op === 'OR') return previous || current
    if (op === 'XOR') return previous !== current
  })

  // better
  // const ops = {
  //   AND: (a, b) => a && b,
  //   OR: (a, b) => a || b,
  //   XOR: (a, b) => a !== b,
  // }
  // return array.reduce(ops[op])
}
/**
 * Remove First and Last Character Part Two
 * @param {string} string - 包含以逗號分隔的字符序列的字串
 * @returns {string | null} - 新的字串，或如果輸入為空或只有一個序列則返回空值
 */
export function array(string) {
  const arrayList = string.split(',')
  if (arrayList.length < 3) return null
  return arrayList.slice(1, arrayList.length - 1).join(' ')

  // better
  // return arr.split(",").slice(1,-1).join(" ") || null;
}
