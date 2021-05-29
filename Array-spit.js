
//slice
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const part = nums.slice(2,5);
console.log(part);
console.log(nums);

//splice
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const part2 = nums.splice(2,3);
console.log(part2);
console.log(nums2);

//join
const nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const removed = nums3.splice(2,3, 77);
const together = nums.join(",");
console.log(together);