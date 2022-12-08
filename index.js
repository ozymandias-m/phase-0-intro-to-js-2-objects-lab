// Write your solution in this file!

const employee = {
    name: "bob",
    streetAddress: "New York"
}

function updateEmployeeWithKeyAndValue(employee,key,value){
    const newObject = {...employee};
    newObject [key] = value;
    return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee [key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value){
    const newObject = {...employee};
    delete newObject [key];
    return newObject;
}

deleteFromEmployeeByKey(employee, key, value)
    function destructivelyDeleteFromEmployeeByKey(employee, key){
        delete employee [key];
        return employee
    }