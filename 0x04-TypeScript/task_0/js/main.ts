// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Cretes two students
const stud1: Student = {
  firstName: "Meggie",
  lastName: "Jack",
  age: 25,
  location: "London",
};

const stud2: Student = {
  firstName: "John",
  lastName: "Jerry",
  age: 29,
  location: "Nigeria",
};

// Store the students in an array
const studentsList: Student[] = [stud1, stud2];

// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Get a reference to the table element in your HTML
const table = document.getElementById("studentTable");

// Create and append rows to the table for each student
studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});
