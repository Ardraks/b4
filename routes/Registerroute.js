

const { response, request } = require('express');
const Registermodel=require('../model/Register')
const app = require('express').Router()





app.post('/registerview', async (request, response) => {
  const { username, email, password, status } = request.body;
  
    try {
      
      // Basic validation
      if (!username || !email || !password || !status) {
        return response.status(400).json({ message: 'All fields are required' });
      }
  
      // Check if the email already exists
      const existingUser = await Registermodel.findOne({ email });
      if (existingUser) {
        return response.status(400).json({ message: 'Email already registered' });
      }
      // Create a new user
    const newUser = new Registermodel({ username, email, password, status});
    await newUser.save();

    response.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: 'Internal Server Error' });
  }
});
app.get('/registerview',async(request,response)=>{
  var data=await Registermodel.find();
  response.send(data)
})


// app.delete('/remove/:id',async(request,response)=>{
//   let id=request.params.id
//   await Registermodel.findByIdAndDelete(id)
//   response.send("Record deleted")
// })
app.put('/updatestatus/:id',async(request,response)=>{
  let id = request.params.id
  await studmodel.findByIdAndUpdate(id,{$set:{Status:"Inactive"}})
  response.send("Record Deleted")
})

app.put('/edit/:id',async(request,response)=>
 {
     let id = request.params.id;
     await placemodel.findByIdAndUpdate(id,request.body)
     response.send("Data updated")
 })


module.exports=app
