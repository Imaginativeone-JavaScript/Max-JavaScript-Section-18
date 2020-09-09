- [ ] Section 18: Working with Http Requests
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
	- [x] 366 03 How The Web Works
	- [x] 367 04 More Background about Http
	- [ ] 368 05 Getting Started with Http
	  - Need a server for this exercise
	- [ ] 369 06 Sending a GET Request

	```javascript
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
	xhr.send();

	// Data shows up in the Developer Tools NETWORK tab
	```

	**Formats**
	JSON
	
	- [ ] 370 07 JSON Data & Parsing Data
	- [ ] 371 08 JSON Data Deep Dive
	- [ ] 372 09 Promisifying Http Requests (with XMLHttpRequest)
	- [ ] 373 10 Sending Data with a POST Request
	- [ ] 374 11 Triggering Requests via the UI
	- [ ] 375 12 The "Fetch" Button Always Appends
	- [ ] 376 13 Sending a DELETE Request
	- [ ] 377 14 Handling Errors
	- [ ] 378 15 Using the fetch() API
	- [ ] 379 16 POSTing Data with the fetch() API
	- [ ] 380 17 Adding Request Headers
	- [ ] 381 18 fetch() & Error Handling
	- [ ] 382 19 XMLHttpRequest vs fetch()
	- [ ] 383 20 Working with FormData
	- [ ] 384 21 Wrap Up
	- [ ] 385 22 Useful Resources & Links
