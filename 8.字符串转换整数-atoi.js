/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const match = s.match(/^(\s*[+|-]?\d+)/)
  let num = match ? Number(match[0]) : 0
  const least = -(2 ** 31)
  const max = 2**31 - 1
  if (num < least) {
    return least
  }
  if (num > max) {
    return max
  }
  return num
};
// @lc code=end

