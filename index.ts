import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstnumber" },
  { message: "enter second number", type: "number", name: "secondnumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition","multipication","subraction","division"],
  },
]);
console.log(answer);


//conditional statement
if (answer.operator === "addition"){
    console.log(answer.firstnumber + answer.secondnumber);
} else if(answer.operator === "subraction"){
    console.log(answer.firstnumber - answer.secondnumber);
}else if(answer.operator === "multipication"){
    console.log(answer.firstnumber * answer.secondnumber);
}else if(answer.operator === "division"){
    console.log(answer.firstnumber / answer.secondnumber);
}else{
    console.log("please select valit operator");
}
 