/**
Assignment 7. Write a function fetchMultipleData that takes an array of URLs and uses Promise.all() to fetch data from all the URLs concurrently. Return an array of responses. 

API to be used
Change todo id for each API call 
https://jsonplaceholder.typicode.com/todos/1
**/

// Solution for Q - 7
function fetchMultipleData(urls) {
	const promises = urls.map((url) =>
		fetch(url).then((response) => response.json())
    );
    return Promise.all(promises);
}

const urlsToFetch = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3"
];

fetchMultipleData(urlsToFetch).then(responses => {
    console.log(responses);
})
