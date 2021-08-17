/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0
  let right = height.length - 1
  let nowMaxArea = 0
  while (left !== right) {
    const width = right - left
    const hleft = height[left]
    const hright = height[right]
    const high = Math.min(hleft, hright)
    const area = width * high
    if (area > nowMaxArea) {
      nowMaxArea = area
    }
    if (hleft < hright) {
      left++
    } else {
      right--
    }
  }
  return nowMaxArea
};
// @lc code=end

