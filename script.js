// selecting the student form
const studentForm = document.getElementById("studentForm");

// selecting students input fields

const studentName = document.getElementById("studentName");
const studentEmail = document.getElementById("studentEmail");
const studentMarks = document.getElementById("studentMarks");

// selescting the student table
const studentTableBody = document.getElementById("studentTableBody");

// adding a respond when someone clicks the add student button
studentForm.addEventListener("submit",function(event){
    event.preventDefault()
    console.log("Student form submitted!");

    // caputuring student information
let name = studentName.value.trim();
let email = studentEmail.value.trim();
let marks = Number(studentMarks.value);
// validate the students marks
if(name ===""){
    console.log("Please enter the student name");
    return;
}

// validate students marks
if(marks < 0 || marks > 100){
    console.log("marks must be between 0 and 100")
    return;
}

// calculating students grades
let grade;

if (marks>=80){
    grade = "A"
}
else if (marks >= 70){
    grade = "B"
}
else if (marks >= 60){
    grade = "C"
}
else if (marks >= 50){
    grade = "D"
}
else{
    grade = "E"
}
// creating a new table row
let row = document.createElement("tr");

// creating table cells
let nameCell = document.createElement("td");
let emailCell = document.createElement("td");
let marksCell = document.createElement("td");
let gradeCell = document.createElement("td");
let actionCell = document.createElement("td");
let deleteButton = document.createElement("td")

// giving the button text
deleteButton.textContent = "Delete"

// listening for a click
deleteButton.addEventListener("click", function(){
    row.remove();
});


// adding information to the cells
nameCell.textContent = name;
emailCell.textContent = email;
marksCell.textContent = marks;
gradeCell.textContent = grade;

// adding cells to the row
row.appendChild(nameCell);
row.appendChild(emailCell);
row.appendChild(marksCell);
row.appendChild(gradeCell);
row.appendChild(actionCell);
// Adding the button to the action cell

actionCell.appendChild(deleteButton)

// adding the row to the student table
studentTableBody.appendChild(row);

// clearing the form after registration
studentForm.reset();







console.log(grade);
// displaying the student information
console.log(name);
console.log(email);
console.log(marks);

})

