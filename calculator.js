const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true})); //use with Express

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html")
});

app.post("/", (req, res)=>{

    var num1 = Number(req.body.nbr1);
    var num2 =  Number(req.body.nbr1);

    var result = num1 + num2;

    res.send("res = "+result);
})

app.get("/bmicalculator", (req,res) =>{

    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmicalculator", (req,res) =>{
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
   
    
    res.send("Your BMI is : "+weight/(Math.pow(height,2)));

})


app.listen(3000, ()=>{
    console.log("Server listing on port 3000");
})