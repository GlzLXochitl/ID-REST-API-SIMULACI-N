// Type: JavaScript
// Description: REST API Simulation.

const users = ["Erika", "Jessica", "America", "Angelica", "Ricardo", "Emilio"]; // Array of users

function sendReponse(code, body = null) {
    const response = {
      code,
      body,
    }; // Response object
    
    switch (code) { // Switch to return the message of the status code
        case 101:
            response.msg = "Continue";
            break;
        case 200:
            response.msg = "Ok";
            break;
        case 201:
            response.msg = "Created";
            break;
        case 301:
            response.msg = "Moved";
            break;
        case 400:
            response.msg = "Endpoint not valid";
            break;
        case 401:
            response.msg = "Unauthorized";
            break;
        case 403:
            response.msg = "Forbidden";
            break;
        case 404:
            response.msg = "Not found";
            break;
        case 500:
            response.msg = "Internal Server Error";
            break;
        case 503:
            response.msg = "Service Unavailable";
            break;
        default:
            response.msg = "Unknown status code";
    }
    return response; // Return the response object
}

console.log("1. getUser, takes one username and return it if exists."); // Function to get a user by username
function getUser(username) { // Function to get a user by username
    let finduser = users.find(user => user === username);
    if (finduser) {
        return sendReponse(200, finduser);
    } else {
        return sendReponse(404);
    }

}
console.log(getUser("Ricardo")); // Test the function
console.log(getUser("Corpus"));
console.log("--------------------"); 

console.log("2. getUsers, return all existing users"); // Function to get all users
function getUsers() { // Function to get all users
    return sendReponse(200, users);
}
console.log(getUsers()); // Test the function
console.log("--------------------");

console.log("3. addUser, adds a new user to the users array and return the user created, all users in new array and the user created"); // Function to add a new user
function addUser(username) { // Function to add a new user
    users.push(username);
    return sendReponse(201, users); // Return the new array
}
console.log(addUser("Corpus")); // Test the function
console.log("--------------------");

console.log("4. removeUserByIndex, takes an index and, if found, removes the element from the array"); // Function to remove a user by index
let index = 2; // Index to remove
function removeUserByIndex(index) { // Function to remove a user by index
    let finduser = users[index];
    if (finduser) {
        users.splice(index, 1); // Remove the user by index
        return sendReponse(200, users); 
    } else {
        return sendReponse(404);
    }
}
let result = removeUserByIndex(index); // Test the function

console.log(result); // Test the function
console.log("--------------------");

console.log("5. removeLastUser, removes the last element from the array"); // Function to remove the last user
function removeLastUser() { // Function to remove the last user
    let lastuser = users.pop();
    return sendReponse(200, users);
}
console.log(removeLastUser()); // Test the function
console.log("--------------------");

console.log("6. removeFirstUser, removes the first element from the array"); // Function to remove the first user
function removeFirstUser() { // Function to remove the first user
    let firstuser = users.shift();
    return sendReponse(200, users); // Return the new array
}
console.log(removeFirstUser()); // Test the function
console.log("--------------------");

console.log("7. updateUserByIndex, takes the index and the new value, if index exists then replace the element with the new value."); // Function to update a user by index
function updateUserByIndex(index, username) { // Function to update a user by index
    let finduser = users[index]; // Find the user by index
    if (finduser) {
        users[index] = username;
        return sendReponse(301, users); // Return the new array
    } else {
        return sendReponse(404);
    }
}
console.log(updateUserByIndex(2, "Corpus")); // Test the function
console.log("--------------------");

console.log("8. getUsersSize, return the number of users in the array."); // Function to get the number of users
function getUsersSize() { // Function to get the number of users
    return sendReponse(200, users.length); // Return the number of users
}
console.log(getUsersSize()); // Test the function
console.log("--------------------"); // Test the function

