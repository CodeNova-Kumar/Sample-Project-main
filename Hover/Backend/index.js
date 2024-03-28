const express =require('express');
const app = express();
const port = 3000;

// app.get('/add',(req,res)=>{
//     res.send("Hello world")
// })

// app.get('/update',(req,res)=>{
//     res.send("A gye 🫡")
// })

// app.get('/updatee',(req,res)=>{
//     res.send("Mae Dakku🐯")
// })


// const UserRouter=require('./Routers/User')

// Middleware
// app.use(express.json());
// app.use('/user',UserRouter)

app.listen(port,() =>{
    console.log('Server is Running at the port 30000')
})