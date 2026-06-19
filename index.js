//npm init
//npm i express
//created a index.js file
//importing the express {from npm express online}
// change common.js in type to module in package.json
import express from 'express'
import stdmodel from './model.js'
import './db.js'

//initialising the express to a variable app

const app = express()

// middleware
// to parse the incoming data
app.use(express.json())

//This is the API⬇️
// app.method('url',callbackFun(req,res) =>{})

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/n',(req,res) => {
    res.send('World Hello')
})

// api to add data to the db

app.post('/add', (req,res) => {
    stdmodel(req.body).save()
    res.send("Data added to the db")
})

// api to get data from the db
app.get('/get', async (req,res) => {
    let std = await stdmodel.find()
    res.send(std)
})

// delete the data from the db
app.delete('/delete/:id', async (req,res) => {
    await stdmodel.findByIdAndDelete(req.params.id)
    res.send("Data Deleted")
})

// update the data in the db
app.put('/update/:id', async (req,res) => {
    let up='sdad'
    let upstd = await stdmodel.findByIdAndUpdate(req.params.id,req.body)
    res.send('Data Updated')
})

// Making the server in listening mode
// app.listen is like return
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})