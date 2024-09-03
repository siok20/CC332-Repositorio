const express = require('express');
const app = express();

app.length('/', (req,res) => {
    res.send('Hello, World!');
});

const port = process.env.PORT||300;
app.listen(port, ()=>{
    console.log('Server running on port ${port}');
});

MediaSourceHandle.exports=app;