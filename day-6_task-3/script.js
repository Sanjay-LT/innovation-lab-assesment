document.getElementById('destructuringButton').addEventListener('click', runDestructuringTask);

function runDestructuringTask() {
  // Basic object destructuring
  const person = {
    name: "Sanjay",
    age: 19,
    city: "Coimbatore"  // Fixed typo from original
  };

  const { name, age, city } = person;
  console.log("Basic Destructuring:");
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);

  // Destructuring with default values
  const user = {
    username: "Sanjay_4471",
    email: "Sanjay@03gmail.com"
  };

  const { username, email, phone = "Not Provided" } = user;
  console.log("\nDestructuring with Default Values:");
  console.log(`Username: ${username}, Email: ${email}, Phone: ${phone}`);

  // Nested object destructuring
  const employee = {
    empName: "Sanjay",
    department: "Sales",
    address: {
      street: "MG Road",
      city: "Bangalore"
    }
  };

  const {
    empName,
    address: { city: empCity }
  } = employee;
  console.log("\nNested Destructuring:");
  console.log(`Employee Name: ${empName}, City: ${empCity}`);

  // Object spread examples
  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };

  const clone = { ...obj1 };
  console.log("\nObject Cloning:");
  console.log("Cloned Object:", clone);

  const merged = { ...obj1, ...obj2 };
  console.log("\nObject Merging:");
  console.log("Merged Object:", merged);
  console.log("Note: Properties from obj2 overwrite matching properties from obj1");
}