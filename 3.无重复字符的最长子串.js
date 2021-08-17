/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0 || s.length === 1) {
    return s.length
  }
  let nowMax = 1
  let nowItem
  let nowLength = 1
  let nowFrontIndex = 0
  const readItemMap = new Map()
  for (let i = 0; i < s.length; i++) {
    nowItem = s[i];
    const ItemIndex = readItemMap.get(nowItem)
    if (!ItemIndex && ItemIndex !== 0) {
      nowLength = i - nowFrontIndex + 1
      if (nowLength > nowMax) {
        nowMax = nowLength
      }
    } else {
      if (ItemIndex < nowFrontIndex) {
        nowLength++
        if (nowLength > nowMax) {
          nowMax = nowLength
        }
      } else {
        nowFrontIndex = ItemIndex + 1
        nowLength = i - nowFrontIndex + 1
        if (nowLength > nowMax) {
          nowMax = nowLength
        }
      }
    }
    readItemMap.set(nowItem, i)
  }
  return nowMax
};
// @lc code=end