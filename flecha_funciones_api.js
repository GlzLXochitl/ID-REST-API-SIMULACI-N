const users = ["Erika", "Jessica", "America", "Angelica", "Ricardo", "Emilio"];

const sendReponse = (code, body = null) => {
    const response = {
        code,
        body,
    };

    switch (code) {
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
    return response;
}

console.log("1. getUser, takes one username and return it if exists.");
const getUser = (username) => {
    let finduser = users.find(user => user === username);
    if (finduser) {
        return sendReponse(200, finduser);
    } else {
        return sendReponse(404);
    }
}
console.log(getUser("Ricardo"));
console.log(getUser("Corpus"));
console.log("--------------------");

console.log("2. getUsers, return all existing users");
const getUsers = () => {
    return sendReponse(200, users);
}
console.log(getUsers());
console.log("--------------------");

console.log("3. addUser, adds a new user to the users array and return the user created, all users in new array and the user created");
const addUser = (username) => {
    users.push(username);
    return sendReponse(201, users);
}
console.log(addUser("Corpus"));
console.log("--------------------");

console.log("4. removeUserByIndex, takes an index and, if found, removes the element from the array");
let index = 2;
const removeUserByIndex = (index) => {
    let finduser = users[index];
    if (finduser) {
        users.splice(index, 1);
        return sendReponse(200, users);
    } else {
        return sendReponse(404);
    }
}
let result = removeUserByIndex(index);
console.log(result);
console.log("--------------------");

console.log("5. removeLastUser, removes the last element from the array");
const removeLastUser = () => {
    let lastuser = users.pop();
    return sendReponse(200, users);
}
console.log(removeLastUser());
console.log("--------------------");

console.log("6. removeFirstUser, removes the first element from the array");
const removeFirstUser = () => {
    let firstuser = users.shift();
    return sendReponse(200, users);
}
console.log(removeFirstUser());
console.log("--------------------");

console.log("7. updateUserByIndex, takes the index and the new value, if index exists then replace the element with the new value.");
const updateUserByIndex = (index, username) => {
    let finduser = users[index];
    if (finduser) {
        users[index] = username;
        return sendReponse(301, users);
    } else {
        return sendReponse(404);
    }
}
console.log(updateUserByIndex(2, "Corpus"));
console.log("--------------------");

console.log("8. getUsersSize, return the number of users in the array.");
const getUsersSize = () => {
    return sendReponse(200, users.length);
}
console.log(getUsersSize());
console.log("--------------------");

