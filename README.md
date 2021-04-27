# Virtual Vehicle Simulator

Repository for my final year project as part of my Computer Science degree at Northumbria University. 
The module took place through 2019-2020, and was finished on 14th May 2020. The deliverables were a sofware package developed over the course of the year, as well as an accompanying dissertation.

---

This software is used to allow interaction with a virtual vehicle and its broadcasted signals, all of which can be queried and updated through this project's API, with changes immediately reflected. 

The scope of the project was to design and architect a data schema that represents a conventional vehicle, and the data signals that are available to be queried (i.e. current gear, current speed, seatbelt status, performance mode, etc). A web API was then developed in order to implement the vehicle schema, with focus on speed and efficiency, so as to achieve its target of being able to serve thousands of requests per second, each faster than 10ms. This was to model the real environment of vehicle telemetry, where values need to be polled thousands of times per minute.

![image of the web application](https://github.com/cnopt/vehicle-simulator/blob/master/updated-application-preview.png?raw=true)

Above is a screenshot of the web application, where API requests can be monitored, and updates to the vehicle schema via POST requests are instantly reflected in the table on the right.


## Schema

The virtual vehicle is implemented in the form of a schema that I designed and developed based on research from primary data sources, such as manufacturer specifications, commercial automotive software, online vehicle databases, and the opinions/approaches of industry professionals.

Specifically, its approach is in the form of a branch/node structure, where a vehicle is represented by sets of these structures. Each vehicle subsystem, such as its `Drivetrain`, includes branches, which in turn include nodes. Both the branches and nodes are accessible, allowing for retrieval of both large data sets, and specific data points.

The schema is implemented in both JSON and YAML formats, written and formatted based on OpenAPI specifications and guidelines.

### Example structure

```
__ Drivetrain
____ Engine
______ displacement
______ power
______ maxTorque
______ maxRPM
______ currentRPM
______ Throttle
________ currentPosition
```

Capitalised values represent branches - structures that contain one or more nodes. If you needed to poll a specific value, you'd query a node.


### URL Structure

The structure of the schema directly informed the URL structure for the API. This means that the locations for specific data points can be determined simply based on where they sit in the schema. The URL follows a simple, readable format of branches and nodes representing directories and subdirectories. For example, the `engine displacement` value sitsd within the Drivetrain -> Engine branches, so the URL to retrieve this value would be `/Vehicle/Drivetrain/Engine/displacement`.


### Testing
Speed was the primary objective for the application. As such, the project was tested extensively during development, using Jest in conjunction with Postman's automation suite, allowing for hundreds of thousands of calls to each individual endpoint. An example test report, `test-report.html` is included in the repository. An in-depth look at these tests and how they were performed can be found in the dissertation.

The test suite can be ran using the following command, which will also automatically generate another test report.
```
npm test
```

## Documentation
Documentation for the Web API is available [here](https://documenter.getpostman.com/view/10442312/SzmiWw6e). It contains all relevant technical information about each endpoint of the API.


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
