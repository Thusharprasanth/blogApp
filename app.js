const express = require("express")
const app = express()

app.set('view engine', 'ejs')

app.listen(3000,()=>{
    console.log("listening to port 3000");
})

app.use('/',(req,res)=>{
    res.render("home")
})