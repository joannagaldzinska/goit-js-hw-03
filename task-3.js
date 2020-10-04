const findBestEmployee = function (employees) {
    "use strict";
    // Write code under this line
  

    let names = Object.keys(employees)
    let tasks = Object.values(employees);
    // let both = Object.entries(employees)

    let maxTasks = Math.max(...tasks)

    
    let emp = "";
    for (let name of names) {

        if (employees[name] >= maxTasks) {
            emp = name
        }

    }

     return emp;

}
// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
