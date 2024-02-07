/**Q1.Write a program that grades students based on their marks

If greater than 90 then A Gradp
If between 70 and 90 then a B gradp
If between  50 and 70 then a C gradp
Below 50 then an F grade  **/

// Solution of Q - 01

let totalMarks = 500;
let obtainedMarks = 375;
let totalSubject = 5;
let grade = '';

let parcentageOfMarks = (obtainedMarks / totalMarks) * 100;

if (parcentageOfMarks >= 90) {
	grade = 'A Grade';
} else if (parcentageOfMarks >= 70 && parcentageOfMarks < 90) {
	grade = 'B Grade';
} else if (parcentageOfMarks >= 50 && parcentageOfMarks < 70) {
	grade = 'C Grade';
} else {
	grade = 'F Grade';
}

console.log('The student has got :' + grade);
