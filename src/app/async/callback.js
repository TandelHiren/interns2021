console.log("Welcome to callback");

// const students = [
//   {
//     name: "hiren",
//     subject: "javaScript",
//   },
//   {
//     name: "pratik",
//     subject: "html",
//   },
// ];

// function enrollStudent(student) {
//   setTimeout(function () {
//     students.push(student);
//     console.log('student enrolled');
//   }, 3000);
// }

// function getStudents() {
//   setTimeout(function () {
//     let str = "";
//     students.forEach(function (student) {
//       str += `<li>${student.name}</li>`;
//     });

//     document.getElementById("student").innerHTML = str;
//     console.log('student fetched');
//   }, 1000);
// }
// let newStudent = { name: "jigar", subject: "Frontend" };
// enrollStudent(newStudent);
// getStudents();


//callback
const students = [
  {
    name: "hiren",
    subject: "javaScript",
  },
  {
    name: "pratik",
    subject: "html",
  },
];

function enrollStudent(student,callback) {
  setTimeout(function () {
    students.push(student);
    console.log('student enrolled');
    callback();
  }, 3000);
}

function getStudents() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (student) {
      str += `<li>${student.name}</li>`;
    });

    document.getElementById("student").innerHTML = str;
    console.log('student fetched');
  }, 1000);
}
let newStudent = { name: "jigar", subject: "Frontend" };
enrollStudent(newStudent,getStudents);
// getStudents();
