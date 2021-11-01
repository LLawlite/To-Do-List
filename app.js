const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const date=require(__dirname+"/date.js");
console.log(date)
let items=["Buy Food","Cool Food","Eat Food"];
let workItems=[];


app.set("view engine","ejs");//always place this line below the const app=express();


app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",function(req,res){
    
    let day=date.getDate()
    res.render("list",{listTitle:day,newListItems:items})//passing the day to the list.ejs and we have to pass all the values at once

  
});
app.post("/",function(req,res){
    toDoInput=req.body.toDoInput;
    if(req.body.list="Work")
    {
        workItems.push(toDoInput);
        res.redirect("/work");
    }
    else{

        items.push(toDoInput);
        res.redirect("/");
    }
    
})

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work",newListItems:workItems});

  
});
app.post("/work",function(req,res){
    let item=req.body.toDoInput;
    workItems.push(item);
    res.redirect("/work");
    
});


app.get("/about",function(req,res){
    res.render("about");
})



app.listen(process.env.PORT||3000,function(){
    console.log("Server has started");
});
