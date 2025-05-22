@param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let arr=[]
    for(i=0;i<nums1.length;i++){
        for(j=0;j<nums2.length;j++){
          if(nums1[i]==nums2[j]&&!arr.includes(nums1[i])){
            arr.push(nums1[i])
          }
        }
        for(k=0;k<nums3.length;k++){
            if(nums1[i]==nums3[k]&&!arr.includes(nums1[i])){
                arr.push(nums1[i])
            }
        }
    }
    for(let j=0;j<nums2.length;j++){
        for(let k=0;k<nums3.length;k++){
            if(nums2[j]==nums3[k]&&!arr.includes(nums2[j])){
                arr.push(nums2[j])
            }
        }
    }
    return arr

};