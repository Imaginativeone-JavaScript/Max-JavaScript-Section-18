- [ ] Section 18: Working with Http Requests 0 / 22 | 1hr 22min
	- [x] 364 01 Module Introduction
	  - Network Requests
		- Sending HTTP Requests via JavaScript
		- Two main ways we have for sending such requests
		  - XMLHttpRequest
			- fetch() API
		- JSON Data and FormData
		- GETting Data, POSTing Data
	- [ ] 365 02 What & Why
	  - [<My Script>][Web Page (Rendered HTML)]
		  - All of this *could* be done on the server...(PHP)
			- The default can be prevented, in order to let JS process info
		- [<My Script>]<-->[Web Page (Rendered HTML)]<-->[Backend Server (API)]
		- [<My Script>]<-->[Web Page (Rendered HTML)]<-//->[Backend Server (API)] (avoid page reloads)
		- [<Script> (Client Side)]<-- HTTP Request/Response, URL (domain + path) -->[Server]
		  - Http Method(s)
			  - GET, POST, PATCH, PUT, DELETE Sent to Server from Client
			- Http Headers
			- Http Body (Data)
			  - JSON Format
				- FormData Format
				- Binary, etc...
		  - Frontend
			  - Detached from backend
				- Responsible for fetching and sending data
			- Server
			  - May on a different server or domain
				- Responsible for storing & retrieving data (usually with a database)
	- [x] 366 03 How The Web Works 1min
	- [x] 367 04 More Background about Http 5min
	- [ ] 368 05 Getting Started with Http 4min
	  - Need a server for this exercise
	- [ ] 369 06 Sending a GET Request 4min

	```javascript
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
	xhr.send();

	// Data shows up in the Developer Tools NETWORK tab
	```

	**Formats**
	JSON
	
	- [ ] 370 07 JSON Data & Parsing Data
	- [ ] 371 08 JSON Data Deep Dive 1min

	```javascript
	const listElement  = document.querySelector('.posts');
	const postTemplate = document.getElementById('single-post');
	// Posts are only available in the onload anonymous function

	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

	// xhr.responseType = 'json'; // Parses the json in advance

	xhr.onload = function() {

		const listOfPosts = JSON.parse(xhr.response);
		// const listOfPosts = xhr.response;

		console.log(listOfPosts); // JavaScript Array
		console.log(xhr.response);

		for (const post of listOfPosts) {
			
			const postEl = document.importNode(postTemplate.content, true); // true: deep clone
			postEl.querySelector('h2').textContent = post.title.toUpperCase();
			postEl.querySelector('p').textContent  = post.body;
			listElement.append(postEl);
		}

	}

	xhr.send();

	// Data shows up in the Developer Tools NETWORK tab
	```
	- [ ] 372 09 Promisifying Http Requests (with XMLHttpRequest) 4min
	- [ ] 373 10 Sending Data with a POST Request 5min
	- [ ] 374 11 Triggering Requests via the UI 3min
	- [ ] 375 12 The "Fetch" Button Always Appends 1min
	- [ ] 376 13 Sending a DELETE Request 5min
	- [ ] 377 14 Handling Errors 5min
	- [ ] 378 15 Using the fetch() API 7min
	- [ ] 379 16 POSTing Data with the fetch() API 3min
	- [ ] 380 17 Adding Request Headers 3min
	- [ ] 381 18 fetch() & Error Handling 7min
	- [ ] 382 19 XMLHttpRequest vs fetch() 2min
	- [ ] 383 20 Working with FormData 7min
	- [ ] 384 21 Wrap Up 1min
	- [ ] 385 22 Useful Resources & Links 1min
