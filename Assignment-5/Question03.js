/**
Assignment 3 Write an asynchronous function fetchData that uses the Fetch API to retrieve data from a given URL and returns the parsed JSON response.  
API to be used 
https://jsonplaceholder.typicode.com/todos/1
**/

// Solution for Q - 3

async function fetchData(url) {
	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Failed to fetch data. Status: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error(`Error fetching data: ${error.message}`);
	}
}

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
fetchData(apiUrl)
	.then((parsedData) => {
		console.log('Data fetched successfully:', parsedData);
	})
	.catch((error) => {
		console.error('Error:', error.message);
	});
