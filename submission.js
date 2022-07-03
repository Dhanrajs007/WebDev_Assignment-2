
function myFunction() {
  let uname = document.querySelector(".name") 
  let uemail = document.querySelector(".email")
  let uage = document.querySelector(".age")  
  if( (uname && uname.value) && (uemail && uemail.value) && (uage && uage.value)){
    alert("Your form is successfully submitted ! ✅");
  }
  else{
    alert("Your form is not submitted submitted 😣 Please enter valid values !!");
  }
}