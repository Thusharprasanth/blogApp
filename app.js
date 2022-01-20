const express = require("express")
const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}));

app.listen(3000,()=>{
    console.log("listening to port 3000");
})

app.get('/',(req,res)=>{
    res.render("home")
})
app.get('/about',(req,res)=>{
    res.render("about")
})
app.get('/newBlog',(req,res)=>{
    res.render("newBlog")
})
app.post('/newBlog',(req,res)=>{
    const title = req.body.title;
    const content = req.body.content
    res.render("home", { title, content })
})