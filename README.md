# Robot Mover

![N|Solid](https://www.logoground.com/uploads/2018182912018-06-073942182Robot%20Logo.jpg)

This application is a simulation of a robot vacuum moving in an area of dimensions 5 units by 5 units with no obstructions.

# Prerequisite to run this application

  - Any latest version of nodejs

Download the source code from: https://github.com/deepakkaithwas/robotmover
# Steps to run this application from command prompt

  - Exceute below command to install the dependencies from the root directory
 ```sh
 npm i
```
  - Execute below command to start the application
 ```sh
npm start
```
  - Once the application starts, you can execute commands to move the robot, for eg:
 ```sh
PLACE 0,0,NORTH
MOVE
REPORT
```

  # Command to run unit test cases and coverage
 ```sh
npm test 
 npm run coverage
```
 "npm run coverage" generate a coverage folder inside the root directory. Navigate to lcov-report directory inside coverage folder, click on index.html to view the coverage report
