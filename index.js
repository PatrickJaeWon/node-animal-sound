const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/user/:id', function (req, res) {
    // const q = req.params
    // console.log(q.id)

    const q = req.query
    console.log(q.q)
    console.log(q.name)

    res.json({'sound' : q})
})

app.get('/cat', function (req, res) {
    res.send({'sound' : '야옹'})
})

app.get('/sound/:name',(req,res)=>{
    const { name } = req.params

    if(name=="dog"){
        res.send({'sound' : '멍멍'})
    }else if(name=="cat"){
        res.send({'sound' : '야옹'})
    }else if(name=="pig"){
        res.send({'sound' : '꿀꿀'})
    }else{
        res.send({'sound' : '알 수 없음'})
    }

    console.log(name)

})

app.listen(port)