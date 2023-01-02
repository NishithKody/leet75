function runningSum(nums: number[]): number[] {

    let res: number[] = [];



    res.push(nums[0])

    let j=0;



    for(let i =1; i<nums.length;i++){

        let temp = res[j]+nums[i];

        res.push(temp);

        j++;

    }



    return res;



};
