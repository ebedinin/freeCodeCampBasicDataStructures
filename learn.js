let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    // Only change code below this line
    const arr = [];
    for(let item in obj){
        arr.push(item);
    }
    return arr;
    // Only change code above this line
}

console.log(getArrayOfUsers(users));