/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s
  }
  const pathMap = new Array(numRows).fill([]).map(() => [])
  let row = 1
  let column = 0
  let direction = 'down'
  const itemList = s.split("")
  // @ts-ignore
  pathMap[0][0] = itemList[0]
  for (let i = 1; i < itemList.length; i++) {
    const item = itemList[i];
    // @ts-ignore
    pathMap[row][column] = item
    if (row === numRows - 1) {
      row--
      column++
      direction = 'up'
    } else if (row === 0) {
      row++
      direction = 'down'
    } else {
      if (direction === 'up') {
        row--
        column++
      } else {
        row++
      }
    }
  }
  const resultList = []
  for (let i = 0; i < pathMap.length; i++) {
    const itemList = pathMap[i];
    for (let j = 0; j < itemList.length; j++) {
      const item = itemList[j];
      resultList.push(item)
    }
  }
  return resultList.join("")
};
// @lc code=end

