const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.get("/", function(req,res){
   res.sendFile(__dirname + "/index.html")
});
app.post("/", function(req,res){
    const query = req.body.cityName;
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid=b93b1a9bdfe42b6aba07399cf547b03e&units=matrics";
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDiscription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageUrl = "http://openweathermap.org/img/wn/"+ icon+"@2x.png"
            const output = `<h1> Welcome To Weather Forcast </h1>
            <p>  ${weatherDiscription} in ${query} </p>
            <img src="${imageUrl}"/>
            <p>Temprature in ${query} right now is ${temp} kalvin</p>`
            res.send(output);
        });
        
    });

});


app.listen(3000,function(){
    console.log("server is running at port 3000")
});



 