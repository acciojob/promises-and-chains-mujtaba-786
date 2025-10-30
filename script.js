let age = document.getElementById("age")
let name1 = document.getElementById("name")
let btn = document.getElementById("btn")
btn.addEventListener('click', () => {
     if(age.value.trim() == 0 || name1.value.trim().length == 0){
         alert("Please enter valid details.")
     }
     else{
    let newPromise = new Promise((resolve,reject)=>{
         setTimeout(() => {
          let a = Number.parseInt(age.value.trim())
             if(a>18){
              
              resolve("Welcome, . You can vote.");
             }
             else{
              
              reject("Oh sorry . You aren't old enough.");
             }
         }, 4000);
    });

    newPromise
    .then((msg)=>{
      alert(msg);
    })
    .catch((err)=>{
      alert(err);
    });
}})