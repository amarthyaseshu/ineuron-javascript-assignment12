/*1. Write a JavaScript program to map Employee Records according to Employee
IDs.
Employee: { id, name, salary }
a) Print an array of all employee ids
b) Print count of employees
c) Print the name of the employee according to their id { key: value }
d) Store the salaries of all employees in an array
e) Calculate the average salary the company is paying to its employees */

//Input

const id=[ 67, 48, 29 ];
const name1=["Hitanshu","Ninad","Amandeep" ];
const salary= [ 75000, 82000, 98000 ];

const employeeList=[];

for(let i=0;i<id.length;i++){
    const employee = {};
    employee.employeeId=id[i];
    employee.employeeName=name1[i];
    employee.employeeSalary=salary[i];
    employeeList.push(employee);
}

console.log(employeeList);

//1.a
console.log("1.a Array of all employee ids: "+employeeList.map(emp=>emp.employeeId));
//1.b
console.log("1.b Count of employees: "+employeeList.length);
//1.c
console.log("1 c Name of the employee according to their id ");
employeeList.forEach(emp=>{
    console.log(emp.employeeId+": "+emp.employeeName);
});
//1.d
const salariesOfAllEmployees=employeeList.map(emp=>emp.employeeSalary);
console.log("1 d Salaries of all employees: "+salariesOfAllEmployees);
//1.e
const avgSalaryOfEmployees= employeeList.reduce((sum,emp)=>{
return sum+=emp.employeeSalary;
},0)/employeeList.length;

console.log("1 e Average salary the company is paying to its employees: "+avgSalaryOfEmployees);

/*3. Write a JavaScript program to iterate over an array inputted by the user using
mapping. Perform the square of all elements in the original array, store the
squares in a new array and make a mapping for the squares and display it.*/

//Input
let arrayOfNums=[ 1, 2, 3, 4, 5 ];

let arrayOfNumsSquares=arrayOfNums.map(num=>num*num);
//Output
console.log("3: "+arrayOfNumsSquares);