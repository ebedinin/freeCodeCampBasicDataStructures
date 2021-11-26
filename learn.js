function countOnline(usersObj) {
    // Only change code below this line
    let count=0;
    for(let item in usersObj){
        if(usersObj[item].online) count+=1;
    }
    return count;
    // Only change code above this line
}