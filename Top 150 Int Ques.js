//  Top 150 Interview Questions 

// Question 1 

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// solved using typescript 
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1.splice(m, n, ...nums2)
    nums1.sort((a, b) => a - b);
  };

//   solved using JavaScript 
var merge = function(nums1, m, nums2, n) {
    for (let i = m, j = 0; j < n; i++, j++) {
        nums1[i] = nums2[j];
    }
    nums1.sort((a, b) => a - b);
};

// solved using Python 
class Solution(object):
    def merge(self, nums1, m, nums2, n):
      for j in range(n):
          nums1[m+j] = nums2[j]
      nums1.sort()

// solved using C++
class Solution {
    public:
        void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
            for (int j = 0, i = m; j<n; j++){
                nums1[i] = nums2[j];
                i++;
            }
            sort(nums1.begin(),nums1.end());
        }
    };