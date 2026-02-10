
const nums1 = [1, 3, 5, 7, 9];
const nums2 = [2, 4, 6, 8, 10];

var findMedianSortedArrays = function (nums1, nums2) {
    const mergedArray = nums1.concat(nums2);
    
    mergedArray.sort((a, b) => a - b);
    
    const length = mergedArray.length;
    
    if (length % 2 === 0) {
        const mid1 = length / 2 - 1;
        const mid2 = length / 2;
        return (mergedArray[mid1] + mergedArray[mid2]) / 2; 
    } else {
        const mid = (length - 1) / 2;
        return mergedArray[mid];  
    }
};
