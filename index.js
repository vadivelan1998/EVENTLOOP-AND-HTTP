const express=require("express")
// console.log(express)
const app=express()
// console.log(app)
app.get("",function(req,res){
    res.send("hello")
})
app.get("/books",(req,res)=>{
    res.send({
        book1:"tamil",
        book2:"telugu",
        book3:"english",
        book4:"hindi"
    })
})

app.listen("5000",()=>{
    console.log("hello")
})