// Object destructuring examples
const user = {
  name: "Sanjay",
  age: 19,
  location: "Coimbatore",
};

const { name, age } = user;
console.log("Name:", name);
console.log("Age:", age);

const employee = {
  id: 101,
  role: "Developer"
};

const { id, role, department = "IT" } = employee;
console.log("ID:", id);
console.log("Role:", role);
console.log("Department:", department);

const profile = {
  username: "Sanjay_4432",
  contact: {
    email: "Sanjay@example.com",
    phone: "7871292838"
  }
};

const {
  contact: { email, phone }
} = profile;
console.log("Email:", email);
console.log("Phone:", phone);

// Object spread examples
const original = { x: 1, y: 2 };
const clone = { ...original };
console.log("Cloned Object:", clone);

const obj1 = { a: 10, b: 20 };
const obj2 = { b: 30, c: 40 };
const merged = { ...obj1, ...obj2 };
console.log("Merged Object:", merged);