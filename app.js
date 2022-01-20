const express = require("express")
const mongoose = require("mongoose")
const Blog = require('./models/blog')

const app = express()


app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}));

const dburl = "mongodb+srv://thusharprasanth:test1234@cluster0.vb5wu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(dburl).then(
    (data)=>{
        app.listen(3000,()=>{
            console.log("listening to port 3000");
        })
}
).catch((err)=>console.log(err))

app.get('/',(req,res)=>{
    res.redirect("/blogs")
})
app.get('/about',(req,res)=>{
    res.render("about")
})

app.get('/blogs', (req,res)=>{
    Blog.find()
    .then((data)=>{
        res.render('home',{'blogs':data})
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.get('/newBlog',(req,res)=>{
    res.render("newBlog")
})
app.post('/newBlog',(req,res)=>{
    const title = req.body.title;
    const content = req.body.content
    res.render("home", { title, content })
})