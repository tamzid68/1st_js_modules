const express = require('express');
const axios = require('axios');

const app= express();
const port = 8080;

app.get('/fetch-fastapi', function(req,res){
    const url = "http://localhost:8000";
    axios.get(url)
    .then(resp => {
        res.send({
            data: resp.data
        });
        console.log("Response Data:", resp.data);
    })
    .catch(error =>{
        res.send({
            error: 'The server is not running'
        });
        console.log("Error:",error.message);
    });
    //res.send("Okay");
});

app.get('/test', function(req,res){
    console.log("Test Route");
    res.send("Test Route");
});

app.listen(port, function(){
    console.log(`Server is running on port ${port}`);
});