/**
Assignment 4. Write an asynchronous function fetchData that uses the Fetch API to retrieve data from a given URL ( https://jsonplaceholder.typicode.com/todos/1 ) and returns the parsed JSON response.  
**/

// Solution for Q - 4
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

fetchData('https://jsonplaceholder.typicode.com/todos/1')
	.then((data) => console.log(JSON.stringify(data)))
	.catch((error) => console.log(error));
