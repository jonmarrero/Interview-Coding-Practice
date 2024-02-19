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


// Question 2 

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Using Java 
class Solution {
    public int removeElement(int[] nums, int val) {
        int i=0;
        for(int j=0; j<nums.length; j++){
            if(nums[j]!=val) {
                nums[i++]=nums[j];
            }
        }
        return i;
    }
}

// using C++ 
class Solution {
    public:
        int removeElement(vector<int>& nums, int val) {
            int i = 0;
            for(int j = 0; j < nums.size(); j++) {
                if(nums[j] != val) {
                    nums[i] = nums[j];
                    i++;
                }
            }
            return i;

// Using Python3
from typing import List

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        i = 0
        for j in range(len(nums)):
            if nums[j] != val:
                nums[i] = nums[j]
                i += 1
        return i

// Using JavaScript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};

// Question 3 

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.


//  using JavaScript 

class Solution {
    public int removeDuplicates(int[] nums) {  
        //Base condition
        if (nums.length == 0) return 0;
        int j = 0;
        // Traverse all elements in loop...
        for (int i = 0; i < nums.length; i++) {
            // If the current element is equal to the next element, we skip..
            if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
                continue;
            }
            //update the array in place
            nums[j] = nums[i];
            j++;
        }
        return j;
    }
}
