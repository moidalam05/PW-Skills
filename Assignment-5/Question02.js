/**
Assignment 2. Create a function getData that returns a Promise. The Promise should resolve after 2 seconds with a message "Data fetched successfully."  
**/

// solution for Q - 2

function getData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Data fetched successfully.');
		}, 2000);
	});
}

getData()
	.then((message) => {
		console.log(message);
	})
	.catch((console) => {
		console.error('Error in getting data: ', error);
	});
