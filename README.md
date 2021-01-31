# Virtual Vehicle Simulator

Repository for my final year project as part of my Computer Science degree at Northumbria University. 
The module took place over the course of 2019-2020, and was finished on 14th May 2020. The deliverables were a sofware package developed over the course of the year, as well as an accompanying dissertation.

---

This is a web application that is used to allow interaction with a virtual vehicle and its broadcasted signals, all of which can be queried and updated through this project's API, with changes immediately reflected. 

It consists of a 3 segments: a virtual vehicle which can be rotated by clicking & dragging the cursor, a table that displays all values that can be updated through the API, and a log that displays information about every request received by the API.

## Installation

a package.json file is included within the file structure to allow for quick and easy install of the project's dependencies.

```
npm install
```

## Usage
To start the server:

```
node server.js
```
Then, navigate to:
```
localhost:3000
```

## Documentation
Documentation for the Web API is available [here](https://documenter.getpostman.com/view/10442312/SzmiWw6e). It contains all relevant technical information about each endpoint of the API.

### Testing
Speed was the primary objective for the application. As such, the project was tested extensively during development, using Postman's automation suite, allowing for hundreds of thousands of calls to each individual endpoint. An example test report, `test-report.html` is included in the repository. An in-depth look at these tests and how they were performed can be found in the dissertation.

## Software libraries used
[Express](expressjs.com) - The server framework used in this project.

[Socket.io](socket.io) - Used to create real-time, bidirectional communication between the client and server sides of the application.

[Jest](jestjs.io) - The project's primary testing framework, used to formally validate each of the API's endpoints.

[jest-html-reporter](npmjs.com/package/jest-html-reporter) - Used to automatically generate a HTML file upon completion of all Jest tests in the project.

[Reel](http://jquery.vostrel.cz/reel) - Used to simulate the effect of rotating the virtual vehicle.

[Express-validator](express-validator.github.io/docs/) - An express implementation of the validator.js library, used during testing of the POST requests, to validate data before it is sent to the client application.

[Moment](momentjs.com) - Used to format timestamps that are provided alongside the request logs at the bottom of the application.

## Dissertation
The dissertation written as part of this project is available [here](https://drive.google.com/file/d/1KNhsxaYZYLcLa7iDxkAFc2tcmz0X4Qgq/view?usp=sharing).