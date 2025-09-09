// QUESTION 1

function introducePerson(name, age) {
    return `Hi I\'m ${name} and I\'m ${age} years old!`;
}

console.log(introducePerson('Alice', 25))

console.log(introducePerson('Bob', 30))

// name and age in the function definition are the parameters 
// 'Alice' 25 and 'Bob' 30 are the arguments.

/* Parameters are varibles in a function while 
Arguments are the actual values that are assigned to the parameters when the function is called.*/



// Question 2 

function createProfile(username, role = "user", isActive = true) {
    return {username, role, isActive}
}


console.log(createProfile("John123"));

console.log(createProfile("john123", "admin456"))

console.log(createProfile("John123", "administrator"))

console.log(createProfile("guest789", "guest", false))

// Default values make the code run smoothly even when some inputs are missing.
/*If you want to skip the middle parameter while still providing a value for a 
 later parameter u must pass undefined for the parameters u want to skip to ensure the default value is used.*/
// If we skip the middle parameter, the value of the last parameter will be undefined if it had no default value.
/* They ensure the function always operates with valid values even when some input is missing.
  They also make certain parameters optional allowing users to call the function with only the essential arguments needed for basic functionality.*/
  