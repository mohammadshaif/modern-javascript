const nums = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < nums.length; i++) {
  
    if (nums[i]>3) {
        break
    }
    // console.log(nums[i]);
}
const nums1 = [1,2,-3,4,-5,6,-7,8,9];
for (let i = 0; i < nums1.length; i++) {
  
    if (nums1[i]<0) {
        continue;//skip kore baki onso use kora
    }
    console.log(nums1[i]);
}