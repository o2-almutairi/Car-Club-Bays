# Requirements

## User Needs
The car owners need to quickly find out the car parkings where they are in Bristols.
### User stories
1. As a taxi driver I want to locate car parkings so often so that I may park my taxi
2. As a car owner I often need the place to park my car.
3. As a truck driver I often want to find out the right places to park my vehicle.
### Actors
1. Vehicle owners
2. vehicle Drivers

### Use Cases

| USE-CASE 1 | List of CCBs | 
| -------------------------------------- | ------------------- |
 **Description**   | It should display a list of all the car parkings or CCBs situated in different locations of Bristols City |
| **Actors**        | Vehicle Owners and Drivers |
| **Assumptions**   | Nil
| **Steps**         |   1. Open Command Prompt
                        2. Point to the directory where the nodeapp files (like app.js, database.js) exist
                        3. Enter the command "node app.js" to run the application
                        4. Go to http://localhost:3000/clubs/club-list
                        5. You will see the list of Car Club Bays
| **Variations**    | None
| **Non-functional** | None
| **Issues**        | None

| USE-CASE 2 | Location on Map | 
| -------------------------------------- | ------------------- |
| **Description**   | It Should Display the locatin of a selected Car parking or CCB on google map |
| **Actors**        | Vehicle Owners and Drivers |
| **Assumptions**   | Nil
| **Steps**         |   1. Wait for the page to load
                        2. Once loaded click on view link given in front of every car club bay
                        3. Wait for the map to load
                        4. The map should display the map with the pointer that highlights the location of the car club bay or car parking.
| **Variations**    | None
| **Non-functional** | None
| **Issues**        | None



TODO: Your Use-Case diagram should include all use-cases.

![Insert your Use-Case Diagram Here](images/use-case.png)

## Software Requirements Specification
### Functional requirements
    FR1: The system should display the list of all the CCBs.
    FR2: The System should locate every CCB individually on google map.
    FR3: The system should calculate and display the distance of every CCB from the location of a certain user.

### Non-Functional Requirements
NFR1: The System should work Accurately.
NFR2: The system should be Suitable for all the drivers and users of different devices.
NFR3: The system should be secure
NFR4: The system shold be fault tolerant to as much extent as possible.

