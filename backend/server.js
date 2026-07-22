const express=require("express");
const mysql=require("mysql2");

const app=express();

app.use(express.json());

const db=mysql.createConnection({

host:"db",
user:"root",
password:"root123",
database:"mydb"

});

db.connect(()=>{

console.log("Connected to MySQL");

});

app.post("/users",(req,res)=>{

const name=req.body.name;

db.query(
"INSERT INTO users(name) VALUES(?)",
[name],

(err)=>{

if(err){


return res.json({message:"Database Error"});
}

res.json({message:"User Saved Successfully"});


});

});

app.listen(3032,()=>{

console.log("Backend Running");

});
