/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n === 1) {
    return ["()"]
  }
  let result = [{value: "(", left: 1, right: 0}]
  for (let i = 2; i <= 2*n; i++) {
    let tmp = []
    result.forEach(({ value, left, right }) => {
      if (left < n) {
        tmp.push({
          value: value + '(',
          left: left + 1,
          right
        })
      }
      if (right < n && right < left) {
        tmp.push({
          value: value + ')',
          left,
          right: right + 1
        })
      }
    })
    result = tmp
  }
  return result.map(({ value }) => value)
};
// @lc code=end

