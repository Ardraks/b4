const express=require("express")
const cors = require("cors")
const db=require("./Connection/Database")

const loginrouter=require('./routes/Loginroute')
const registerrouter=require('./routes/Registerroute')




const loginmodel = require("./model/Login")
const Registermodel = require("./model/Register")



const app=new express();


app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());


app.get('/',(request,response)=>{
    response.send("hai")
})

app.use("/login",loginrouter)
app.use("/register",registerrouter)


//  app.post('/login',async(request,response)=>{
//     var data = await usermodel.find();
//    response.send(data)

//app.get('/login',async(request,response)=>{
  //var data = await usermodel.find();
  //response.send(data)
// })

app.listen(4005,(request,response)=>{
    console.log("Port is running in 4005")
})