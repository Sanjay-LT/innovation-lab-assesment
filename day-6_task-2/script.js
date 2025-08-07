document.getElementById('objectTaskButton').addEventListener('click', runObjectTasks);

function runObjectTasks() {
  // Create student object
  const student = {
    name: "Sanjay",
    age: 19,
    course: "Bsc Computer Technology",
    showInfo: function() {
      console.log(`Student: ${this.name}, Age: ${this.age}, Course: ${this.course}`);
    }
  };

  // Display initial student info
  student.showInfo();

  // Update age and display
  student.age = 21;
  console.log("Updated Age:", student.age);

  // Add new property and display
  student.city = "Mumbai";
  console.log("Added City:", student.city);

  // Access properties in different ways
  console.log("Name (bracket notation):", student["name"]);
  console.log("Course (dot notation):", student.course);

  // Delete property and show result
  delete student.course;
  console.log("After removing course:", student);

  // Verify course was deleted
  console.log("Course now:", student.course || "Not available");
}