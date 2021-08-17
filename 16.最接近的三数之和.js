/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // 先对数组进行排序, 为了后面双指针计算值做准备
  nums = nums.sort((a, b) => a - b);
  let min = +Infinity,
    result = 0;

  for (let i = 0; i < nums.length; i++) {
    // 循环内部声明左右指针, 初始化 左指针位于索引下一个, 右指针位于数组最后一位索引
    let left = i + 1,
      right = nums.length - 1;

    // 结束条件为左右指针重合
    while (left < right) {
      // 每次用3个索引计算合然后更新最小值
      const sum = nums[i] + nums[left] + nums[right];
      const res = sum - target;
      if (Math.abs(res) < min) {
        min = Math.abs(res);
        result = sum;
      }

      // 如果合的值大于目标值target, 那么表示需要减少合值再计算, 所以右指针后退一位, 反之左指针前进一位
      if (res >= 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return result;

};
// @lc code=end