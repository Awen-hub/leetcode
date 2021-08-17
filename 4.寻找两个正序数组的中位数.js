/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const numsCount = nums1.length + nums2.length
  const isEvenCount = (numsCount) % 2 === 0
  let needNumCount = isEvenCount ? numsCount / 2 + 1 : Math.ceil(numsCount / 2)
  let nowNum1
  let nowNums1Index = 0
  let nowNum2
  let nowNums2Index = 0
  const resultList = []
  while (needNumCount > 0) {
    nowNum1 = nowNums1Index < nums1.length ? nums1[nowNums1Index] : Number.MAX_SAFE_INTEGER
    nowNum2 = nowNums2Index < nums2.length ? nums2[nowNums2Index] : Number.MAX_SAFE_INTEGER
    if (nowNum1 <= nowNum2) {
      if (isEvenCount && needNumCount <= 2) {
        resultList.push(nowNum1)
      } else if (!isEvenCount && needNumCount === 1) {
        resultList.push(nowNum1)
      }
      nowNums1Index++
    } else {
      if (isEvenCount && needNumCount <= 2) {
        resultList.push(nowNum2)
      } else if (!isEvenCount && needNumCount === 1) {
        resultList.push(nowNum2)
      }
      nowNums2Index++
    }
    needNumCount--
  }
  return resultList.reduce((acc, val) => acc + val, 0) / resultList.length;
};
// @lc code=end

