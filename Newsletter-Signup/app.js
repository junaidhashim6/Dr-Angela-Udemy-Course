const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))
const port = 3000
app.get('/', (req, res) => 
res.sendFile(__dirname + "/signup.html"))
app.post('/', function (req, res) {
   var firstName = req.body.fname;
   var lastName = req.body.lname;
   var email = req.body.email; 
   var output = `<p>yes you have entered fallowing details your name is ${firstName} your last name is ${lastName} and your email is ${email} </p>`
  res.send(output)
})

app.listen(port, () => 
console.log(`Example app listening on port ${port}!`))