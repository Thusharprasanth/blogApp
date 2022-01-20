const express = require("express")
const Blog = require('../models/blog')
const blogController = require("../controllers/blogControllers")
const router = express.Router()


router.get('/',(req,res)=>{
    res.redirect("/blogs")
})
router.get('/newBlog',blogController.blog_create_get)
router.get('/blogs', blogController.blog_index)
router.post('/blogs', blogController.blog_create_post)
router.get('/blogs/:id', blogController.blog_details)
router.delete('/blogs/:id', blogController.blog_delete)
router.get('/about', blogController.about)

module.exports = router