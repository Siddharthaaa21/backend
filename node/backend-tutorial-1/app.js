console.log('Hello World!');
require('dotenv').config()
const express = require('express') // Import express require module syntax is used to import the express module
// import express from 'express'; // Import express import module syntax is used to import the express module  

const app = express() //object of express module is created app is variable app.any thing 
// app contans all funtionalities of express
 
const port = 3000// there are 65,535 ports available for use //it listens in port 3000 



app.get('/', (req, res) => {
  res.send('Hello World!')//callback function is used to send the response to the client
})
const githubData = {
    name: 'Siddhartha',
    username: 'Siddhar',
    email: 'sdf',
    location: 'India',
    url: 'dsfsddf',
    avatar: 'https://avatars.githubusercontent.com/u/59868267?v=4',
}

app.get('/twitter', (req,res) => {
    res.send('Siddharthaaa21')

})
app.get('/github',(req,res)=>{
    res.json(githubData)

})


app.listen(process.env.PORT, () => {//listen is for the server to listen to the port whcih is passed as an argument
  console.log(`Example app listening on port ${port}`)
})