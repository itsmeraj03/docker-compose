async function saveData(){

const name=document.getElementById("name").value;

const response=await fetch("/api/users",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({name})
});

const data=await response.json();

document.getElementById("msg").innerHTML=data.message;

}
