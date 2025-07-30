console.log("=== Conditional Statements Practice ===");

// 1. Basic if statement (Voting eligibility)
const voterAge = 20;
if (voterAge >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

// 2. if-else if ladder (Grading system)
const studentScore = 82;
if (studentScore >= 90) {
  console.log("Grade: A (Excellent)");
} else if (studentScore >= 75) {
  console.log("Grade: B (Good)");
} else if (studentScore >= 60) {
  console.log("Grade: C (Average)");
} else {
  console.log("Grade: F (Needs improvement)");
}

// 3. Switch statement (Days of week)
const dayOfWeek = 3;
switch (dayOfWeek) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday - Hump day!");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday - Weekend is coming!");
    break;
  case 6:
    console.log("Today is Saturday - Enjoy your weekend!");
    break;
  case 7:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day number - Please enter 1-7");
}

// 4. Positive/Negative/Zero check
const testNumber = 0;
if (testNumber > 0) {
  console.log(`${testNumber} is positive`);
} else if (testNumber < 0) {
  console.log(`${testNumber} is negative`);
} else {
  console.log("The number is zero (neutral)");
}

// 5. Additional example: Login status
const isLoggedIn = true;
const username = "john_doe";
if (isLoggedIn && username) {
  console.log(`Welcome back, ${username}!`);
} else {
  console.log("Please log in to continue");
}