const Blog = require('../models/blog')

const blog_index = (req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then((data)=>{
        res.render('home',{'blogs':data})
    })
    .catch((err)=>{
        console.log(err);
    })
}

const blog_details = (req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=>{
        res.render('details', {'blog' : result})
    })
    .catch((err)=>{
        console.log(err);
    })
}
const blog_create_post = (req,res)=>{
    const blog = new Blog(req.body)

    blog.save()
    .then((result)=>{
        res.redirect('/blogs')
    })
    .catch((err)=>{
        console.log(err);
    })
}
const blog_create_get = (req,res)=>{
    res.render("newBlog")
}

const blog_delete = (req,res)=>{
    const { id } = req.params
    const blog = Blog.findById(id)
    blog.deleteOne()
    .then((result)=>{
        res.redirect('/blogs')
    })
    .catch((err)=>{
        console.log(err);
    })
}

const about = (req,res)=>{
    res.render("about")
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_post,
    blog_delete,
    blog_create_get,
    about
}