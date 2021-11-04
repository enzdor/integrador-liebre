const path = require('path')
const express = require('express')
const app = express()

const publicPath = path.join(__dirname , './public')
app.use(express.static(publicPath))

app.listen(process.env.PORT || 3000 , () => {
    console.log('Server on');
})

app.get('/' , (req,res) => {
    let htmlPath = path.resolve('./views/index.html')
    res.sendFile(htmlPath)
})

app.get('/register' , (req,res) => {
    let htmlPath = path.resolve('./views/register.html')
    res.sendFile(htmlPath)
})

app.get('/login' , (req,res) => {
    let htmlPath = path.resolve('./views/login.html')
    res.sendFile(htmlPath)
})