const express = require('express');
const app= express();

const user = {
    name: 'Tamzid',
    age: 24
}

app.get('/home', function(req,res){
    res.send("Hello Tamzid");
});

app.get('/user',function(req,res){
    res.json(user);
});

app.get('/student',function(req,res){
    res.send({
        name:'ASM Tamzid',
        id : 562499,
        dept: 'CSE'
    });
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});