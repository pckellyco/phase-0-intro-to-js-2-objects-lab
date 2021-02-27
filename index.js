// Write your solution in this file!
let employee = {name: 'Michael Scott', streetAddress: '1234 Paper Blvd.'}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployeeObj = { ...employee };
    newEmployeeObj[key] = value;
    return newEmployeeObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let newEmployeeObj = { ...employee };
    delete newEmployeeObj[key];
    return newEmployeeObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}