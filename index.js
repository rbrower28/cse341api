const express = require('express');
const app = express()

// ROUTES
app.get('/', (req,res) => {
    res.send("Mark Brower")
})

app.listen(3000)