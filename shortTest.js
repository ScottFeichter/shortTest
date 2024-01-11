/*

Goal: build a function that utilizes helper functions to solve some math
problems.

 -- Given some input (a string and two nums), perform the correct operation
    and return the result
 -- Will likely use if statements
 -- Upon meeting some condition, I want to invoke the proper function and
    return its result

Valid Operations
  -- addition
  -- subtraction
  -- multiplication
  -- division

  Understand the problem
  Make a Plan
  Execute the plan
  Refactor

  Understand the problem?
    - Input: 2 numbers + operations(string) ==> 10 and 5  addition
    - Output: a number ==> result of calling our operation on the two nums ==> 15
    *operation is addition, 10 + 5
    * use helper functions!

  Make a plan:
    1. define a function math, that takes in two nums and a operation
    2. Conditionally check what the operation is, depending on the operation
      -each condition will call a function depending on the operation
      - if its addition
        - call a function that will add the two numbers
      - if its subtraction
        - call a function that will subtract the two numbers
      - if its division
        - call a function that wil divide the two numbers
      - if its multiplication
        - call a function that will multiply the two numbers
      - if its none of these, return 'not sure what you mean???'

    Code out Prompt! 25mins
      - Take a break!
*/

function addition(num1, num2) {
  return num1 + num2;
}

function subtraction(num1, num2) {
  return num1 - num2;
}

function multiplication(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 / num2;
}

function math(string, num1, num2) {
  if (string === "addition") {
    return addition(num1, num2);
  } else if (string === "multiplication") {
    return multiplication(num1, num2);
  } else if (string === "division") {
    return division(num1, num2);
  } else if (string === "subtraction") {
    return subtraction(num1, num2);
  }
  return "not sure what you mean???";
}

console.log(math("addition", 5, 7));
console.log(math("multiplication", 5, 7));
console.log(math("division", 5, 7));
console.log(math("subtraction", 5, 7));
console.log(math("peace", 5, 7));

