import express from 'express'
import empModel from './model.js' 
import './db.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.post('/', async (req, res) => {
  await empModel(req.body).save()
  res.send('Employee Data Added')
})

app.get('/', async (req, res) => {
    let emp= await empModel.find()
    res.send(emp)
})

app.delete('/:id', async (req,res) => {
  await empModel.findByIdAndDelete(req.params.id)
  res.send("Employee Deleted")
})

app.put('/:id', async (req,res) => {
  let up= await empModel.findByIdAndUpdate(req.params.id,req.body)
  res.send("Data Updated")
})

let port=3005
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

