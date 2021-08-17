/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const readMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const need = target - element
    if (readMap.has(need)) {
      return [readMap.get(need), i]
    } else {
      readMap.set(element, i)
    }
  }
};
// @lc code=end

