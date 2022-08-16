

console.log('Promise');
// promise: we have to leran promise concept
// reslove
//reject
//pending

// function func1(){
//   return new Promise(function(reslove,reject){
//     setTimeout(() => {
//       const error = true;
//       if(!error){
//         console.log('Function:your promise has been resolved');
//         reslove();
//       } else {
//         console.log('Function:your promise has not been resolved');
//         reject('sorry not fulfilled')
//       }
//     }, 2000);
//   })

// }
// func1().then(function(){
//   console.log('hiren: thanks for resolved');
// }).catch(function(error){
//   console.log('very bad bro ' + error);
// })


// callback
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

function enrollStudent(student) {
  return new Promise(function(resolve, reject){
    setTimeout(function () {
      students.push(student);
      console.log('student enrolled');
      const error = false;
      if(!error){
        resolve()

      }else{
        reject()
      }
    }, 3000);
  })
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
enrollStudent(newStudent).then(function(){
  getStudents();
}).catch(function(){
  console.log('error oocured');
})
