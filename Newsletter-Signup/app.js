const bodyParser = require('body-parser')
const express = require('express')
require('dotenv').config()
// console.log(process.env)
var https = require('https');

console.log('Server running at http://127.0.0.1:8081/');
const app = express()
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))
const port = process.env.PORT;
app.get('/', (req, res) => 
res.sendFile(__dirname + "/signup.html"))
app.post('/', function (req, res) {
   const firstName = req.body.fname;
   const lastName = req.body.lname;
   const email = req.body.email; 
   const data = {
    members:[
        {
            email_address: email,
            status: "subscribed",
            merge_fields:{
                FNAME: firstName,
                LNAME: lastName
            }
        }
    ]
   };
   const jasonData = JSON.stringify(data);
   const url = "https://us7.api.mailchimp.com/3.0/lists/317ce8c1ad"
   const options = {
    method : "POST",
    auth : process.env.API_KEY
   }
    const request = https.request(url, options, function(response){
        if (response.statusCode === 200){
            res.sendFile(__dirname + "/success.html")

        }else{
            res.sendFile(__dirname + "/failure.html")
        }
    response.on("data",function(data){
        console.log(JSON.parse(data));
    })
   })
   request.write(jasonData);
   request.end();
})

app.post('/failure', function(req,res){
    res.redirect('/')
})

app.listen(port || 3000, () => 
console.log(`Example app listening on port 3000`))