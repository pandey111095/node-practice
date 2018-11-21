const express = require('express');


const port = process.env.PORT || 3000 ;

var app = express();

app.get('/', (req, res) => {
    res.send('Ram is a good boy');
});
console.log('Ram');

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})