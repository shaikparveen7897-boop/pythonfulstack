alert("welcome to nriit Learning Managemen System")
let heading =document.getElementById ("welcome");
heading.innerHTML="welcome future software engineers"
console.log("heading element:",heading)
let msg = document.getElementById("message")
msg.innerHTML ="javascript is fun"
console.log("Message element: ", msg)
function showmessage(){
    alert("welcome to nriit learning management system")
}
function changeHeading() {
    document.getElementById("welcome").innerHTML = "welcome python fullstack Developers"}
let heading1=document.querySelector("#welcome");
console.log("Heading element: ", heading)
let button =document.getElementById("btnGreeting");
button.addEventListener("click",function (){
    alert("Welcome to javascript Event handling");
});
let registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", function (event){
    event.preventDefault();
    let name =document.getElementById("name").value ;
    let email =document.getElementById("email").value ;
    let password= document.getElementById("password").value ;
    if(!name || !email || !password){ alert("pleasefill in all fields.");
        return;
    }
    alert("Registration successful!");
    console.log("Name: ",name);
    console.log("email: ",email);
    console.log("password: ",password);});



