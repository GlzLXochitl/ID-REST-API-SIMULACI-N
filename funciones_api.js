
const users = ["Juan", "Pedro", "Pablo", "Maria", "Luis", "Ana", "Lucia", "Carlos", "Jose", "Marta"];
//getUser, toma un nombre de usuario y lo devuelve si existe.
function sendReponse(code, body = null) {
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

//getUser, toma un nombre de usuario y lo imprime si existe.
function getUser(name) {
    let user = users.find((user) => user === name);
    if (user) {
        return sendReponse(200, user);
    } else {
        return sendReponse(404, "User not found");
    }
}
console.log(getUser("Juan"));

//getUsers, devuelve todos los usuarios existentes
function getUsers() {
    if (users.length > 0) {
        return sendReponse(200, users);
    } else {
        return sendReponse(404, "Users not found");
    }
}
console.log(getUsers());

//addUser, agrega un nuevo usuario a la matriz de usuarios y devuelve el usuario creado, todos los usuarios en nueva matriz y el usuario creado
function addUser(name) {
    users.push(name);
    return sendReponse(201, {users, name});
}
console.log(addUser("Jorge"));

//removeUserByIndex, toma un índice y, si lo encuentra, elimina el elemento del matriz, devuelve el elemento eliminado y la nueva matriz.
function removeUserByIndex(index) {
    if (index < users.length) {
        const user = users.splice(index, 1);
        return sendReponse(200, {user, users});
    } else {
        return sendReponse(404, "User not found");
    }
}
console.log(removeUserByIndex(2));

//removeLastUser, elimina el último elemento de la matriz, devuelve el elemento eliminado elemento y la nueva matriz.
function removeLastUser() {
    const user = users.pop();
    return sendReponse(200, {user, users});
}
console.log(removeLastUser());

//removeFirstUser, elimina el primer elemento de la matriz, devuelve el elemento eliminado elemento y la nueva matriz.
function removeFirstUser() {
    const user = users.shift();
    return sendReponse(200, {user, users});
}
console.log(removeFirstUser());

//updateUserByIndex, toma el índice y el nuevo valor, si el índice existe, reemplácelo el elemento con el nuevo valor.
function updateUserByIndex(index, name) {
    if (index < users.length) {
        const user = users.splice(index, 1, name);
        return sendReponse(200, {user, users});
    } else {
        return sendReponse(404, "User not found");
    }
}
console.log(updateUserByIndex(2, "Jorge"));

//getUsersSize, devuelve el número de usuarios en la matriz.
function getUsersSize() {
    return sendReponse(200, users.length);
}
console.log(getUsersSize());

