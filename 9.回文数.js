/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false
  }
  const numStr = String(x)
  if (numStr.length === 1) {
    return true
  }
  const reverseStr = numStr.split("").reverse().join("")
  return numStr === reverseStr
};
// @lc code=end

