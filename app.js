const express = require("express")
const mongoose = require("mongoose")
const methodOverride = require('method-override')
const blogRoutes = require('./routes/blogRoutes')


const app = express()


app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))

const dburl = "mongodb+srv://thusharprasanth:test1234@cluster0.vb5wu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(dburl).then(
    (data)=>{
        app.listen(3000,()=>{
            console.log("listening to port 3000");
        })
}
).catch((err)=>console.log(err))

//blog routes
app.use(blogRoutes)