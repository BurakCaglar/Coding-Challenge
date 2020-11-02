function getSecondLargest(nums) {

    let firstLargest = 0;

    for (let number of nums) {
        if(firstLargest < number) {
            firstLargest = number;
        }
    }

    let secondLargest = 0;
    
    for(let number of nums) {
        if(secondLargest < number && number < firstLargest) {
            secondLargest = number;
        }
    }

    return secondLargest;

}