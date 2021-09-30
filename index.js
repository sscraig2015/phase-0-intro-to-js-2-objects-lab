var employee = {
    name: 'Josh',
    streetAddress: '123 Fake St',
}

function updateEmployeeWithKeyAndValue(employee,key,value) {
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee,key,value) {
    return Object.assign(employee, {[key]:value})
}

function deleteFromEmployeeByKey (employee, key) {
    const newObj3 = Object.assign({}, employee)
    delete newObj3[key]
    return newObj3

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    
    delete employee[key]
    return employee

}