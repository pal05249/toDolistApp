const express = require("express");
const bodyParser=require("body-parser");

const app=express();
var items=[];
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function(req,res)
{  
    var today=new Date();
    
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"}
    

    let day=today.toLocaleDateString("en-US",options);

    res.render("list",{kindOfDay:day, newItems:items});
});

app.post("/",function(req,res){
  item= req.body.addItem;
items.push(item);

console.log(items);
  res.redirect("/");
});

app.listen(3000, function(){
    console.log("server is running");
});