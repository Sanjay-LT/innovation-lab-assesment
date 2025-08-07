const student = {
  name: "Sanjay",
  age: 19,
  course: "B.Sc Computer TechNology",
  displayInfo: function () {
    console.log("Name:", this.name);
    console.log("Age:", this.age);
    console.log("Course:", this.course);
  }
};

student.displayInfo();

student.age = 22;
student.city = "Coimbatore";

console.log("Updated Age:", student.age);
console.log("City Added:", student.city);

delete student.course;

console.log("After Deleting Course:", student);