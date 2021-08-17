/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 1
  }
  for (let i = 0; i < nums.length - 1; i++) {
    let front = i
    let nowNum = nums[i]
    let end = i
    for (let j = i + 1; j < nums.length; j++) {
      const item = nums[j]
      if (item === nowNum) {
        end = j
        if (end === nums.length - 1) {
          if (end - front >= 2) {
            nums.splice(front + 2, nums.length - front)
          }
        }
      } else {
        if (end - front > 1) {
          nums.splice(front + 1, end - front - 1), end, front; 
        }
        break
      }
    }
  }
  return nums.length
};
// @lc code=end

