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

app.get('/newBlog',(req,res)=>{
    res.render("newBlog")
})

app.get('/blogs', (req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then((data)=>{
        res.render('home',{'blogs':data})
    })
    .catch((err)=>{
        console.log(err);
    })
})


app.post('/blogs',(req,res)=>{
    const blog = new Blog(req.body)

    blog.save()
    .then((result)=>{
        res.redirect('/blogs')
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.get('/blogs/:id', (req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=>{
        res.render('details', {'blog' : result})
    })
    .catch((err)=>{
        console.log(err);
    })
})