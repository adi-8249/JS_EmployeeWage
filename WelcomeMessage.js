console.log("Welcome to javascript employee wage program");
//UC1_EmployeeAttendance check
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
console.log(empCheck);
if (empCheck == IS_ABSENT) 
{
  console.log("Employee is absent");
} 
else 
{
  console.log("Employee is present");
}