/** 
Q2. The following is an array of 10 students ages:  

    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 

   * Sort the array and find the min and max age
   * Find the median age(one middle item or two middle items divided by two)
   * Find the average age(all items divided by number of items)
   * Find the range of the ages(max minus min)
   * Compare the value of (min - average) and (max - average), use abs() method  
**/

// Solution for Q - 2

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
// sort in ascending order
const sortedAges = ages.sort((a, b) => a - b);
console.log(`Sorted Ages : ${sortedAges}`);
console.log(`Min age is: ${sortedAges[0]}`);
console.log(`Max age is: ${sortedAges[sortedAges.length - 1]}`);

// * Find the median age(one middle item or two middle items divided by two)
let midIndex = Math.floor(ages.length / 2);
console.log(`Median age is: ${ages[midIndex]}`);

// * Find the average age(all items divided by number of items)
let totalSum = 0;
for (sumOfAges of ages) {
	totalSum += sumOfAges;
}
const averageAge = totalSum / ages.length;
console.log(`Average age is: ${averageAge}`);

// * Find the range of the ages(max minus min)
console.log(
	`Range of ages is: ${sortedAges[sortedAges.length - 1] - sortedAges[0]}`
);

// * Compare the value of (min - average) and (max - average), use abs() method
let diffMinAvg = Math.abs(sortedAges[0] - averageAge);
let diffMaxAvg = Math.abs(sortedAges[sortedAges.length - 1] - averageAge);
console.log(
	`Difference between Min Avg and Max Avg is: ${Math.round(
		diffMinAvg
	)} and ${Math.round(diffMaxAvg)}`
);
