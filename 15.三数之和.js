/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // if (nums.length <= 2) {
  //   return []
  // }
  // const underZeroList = []
  // const upZeroList = []
  // const zeroList = []
  // const valueMap = new Map()
  // let Max = nums[0]
  // let Min = nums[0]
  // for (let i = 0; i < nums.length; i++) {
  //   const item = nums[i]
  //   if (item < Min) {
  //     Min = item
  //   } else if (item > Max) {
  //     Max = item
  //   }
  // }
  // let Max_d2 = -Max * 2
  // let Min_d2 = -Min * 2
  // for (let i = 0; i < nums.length; i++) {
  //   const item = nums[i];
  //   if (item < 0 && item >= Max_d2) {
  //     underZeroList.push({
  //       value: item,
  //       index: i
  //     })
  //     if (valueMap.has(item)) {
  //       const count = valueMap.get(item)
  //       if (count === 1) {
  //         valueMap.set(item, count + 1)
  //       }
  //     } else {
  //       valueMap.set(item, 1)
  //     }
  //   } else if (item === 0) {
  //     zeroList.push({
  //       value: item,
  //       index: i
  //     })
  //   } else {
  //     if (item <= Min_d2) {
  //       upZeroList.push({
  //         value: item,
  //         index: i
  //       })
  //       if (valueMap.has(item)) {
  //         const count = valueMap.get(item)
  //         if (count === 1) {
  //           valueMap.set(item, count + 1)
  //         }
  //       } else {
  //         valueMap.set(item, 1)
  //       }
  //     }
  //   }
  // }
  // if (underZeroList.length === 0  && zeroList.length === 0) {
  //   return []
  // }
  // const result = []
  // const totalValueSet = new Set()
  // underZeroList.forEach(({value : value1}) => {
  //   upZeroList.forEach(({ value: value2 }) => {
  //     const sum2 = value1 + value2
  //     if (sum2 >= -Max) {
  //       if (sum2 > 0) {
  //         const need = 0 - sum2
  //         if (valueMap.has(need) && (valueMap.get(need) !== 1 || need !== value1)) {
  //           const valueList = [need, value1, value2].sort((a,b) => a-b)
  //           const key = valueList.join("")
  //           if (!totalValueSet.has(key)) {
  //             result.push(valueList)
  //             totalValueSet.add(key)
  //           }
  //         }
  //       } else if (sum2 === 0) {
  //         if (zeroList.length !== 0) {
  //           const valueList = [0, value1, value2].sort((a,b) => a-b)
  //           const key = `${value1}0${value2}`
  //           if (!totalValueSet.has(key)) {
  //             result.push(valueList)
  //             totalValueSet.add(key)
  //           }
  //         }
  //       } else {
  //         const need = 0 - sum2
  //         if (valueMap.has(need) && (valueMap.get(need) !== 1 || need !== value2)) {
  //           const valueList = [value1, value2, need].sort((a,b) => a-b)
  //           const key = valueList.join("")
  //           if (!totalValueSet.has(key)) {
  //             result.push(valueList)
  //             totalValueSet.add(key)
  //           }
  //         }
  //       }
  //     }
  //   })
  // })
  // if (zeroList.length >= 3) {
  //   result.push([0, 0, 0])
  // }
  // return result
  if (nums.length < 3) {
    return []
  }
  if (nums.length === 3) {
    if (nums[0] + nums[1] + nums[2] === 0) {
      return [
        nums
      ]
    } else {
      return []
    }
  }
  nums.sort((a, b) => a - b)
  if (nums[0] > 0) {
    return []
  }
  const MinBoundrary = -nums[nums.length - 1] * 2
  let minLeft = -1
  const valueMap = {}
  let zeroCount = 0
  let firstUpOrEqualZeroIndex = -1
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i]
    if (item >= MinBoundrary && minLeft === -1) {
      minLeft = i
    }
    if (valueMap[item] === false || valueMap[item] === true) {
      valueMap[item] = true
    } else {
      valueMap[item] = false
    }
    if (item === 0) {
      zeroCount++
    }
    if (item >= 0 && firstUpOrEqualZeroIndex === -1) {
      firstUpOrEqualZeroIndex = i
    }
  }
  if (firstUpOrEqualZeroIndex <= 0) {
    if (zeroCount >= 3) {
      return [[0,0,0]]
    } else {
      return []
    }
  }
  const result = []
  for (let i = minLeft; i < firstUpOrEqualZeroIndex; i++) {
    const left = i
    const leftNum = nums[left]
    if (leftNum === nums[left - 1] && left !== minLeft) {
      continue
    }
    for (let j = left + 1; j <= nums.length - 2; j++) {
      const mid = j
      const midNum = nums[mid]
      if (midNum === nums[mid - 1] && mid !== left + 1) {
        continue
      }
      const sum2 = leftNum + midNum
      if (sum2 >= 0) {
        break
      }
      const need = -sum2
      if (need < midNum) {
        continue
      }
      if (need === midNum) {
        if (midNum === nums[mid - 1]) {
          continue
        }
      }
      if (valueMap[need]) {
        result.push([leftNum, midNum, need])
        continue
      } else if (valueMap[need] === false) {
        if (need !== midNum) {
          result.push([leftNum, midNum, need])
          continue
        }
      }
    }
  }
  if (zeroCount >= 3) {
    result.push([0,0,0])
  }
  return result
};
// @lc code=end

//websocket和socket的区别
//和http的区别