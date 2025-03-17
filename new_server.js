const express = require('express');
const app= express();
const axios = require('axios');

app.get('/user', function(req,res){
    const url = "http://localhost:3000/student";
    axios.get(url)
    .then(resp => {
        console.log("Response Data:", resp.data);
    })
    .catch(error =>{
        console.log("Error:",error.message);
    });
    res.send("Okay");
});

app.get('/test', function(req,res){
    console.log("Test Route");
    res.send("Test Route");
});

app.listen(4000, function(){
    console.log("Server is running on port 4000");
});