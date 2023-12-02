function removeDuplicates(nums: number[]): number {
    const uniques: number[] = [];
    let current: undefined | number = undefined;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== current) {
        uniques.push(nums[i])
        current = nums[i]
      }
    }
    nums = uniques;
    console.log(nums);
    return nums.length
};

console.log(removeDuplicates([1,1,2]))
