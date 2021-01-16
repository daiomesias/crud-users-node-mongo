const express = require("express")

const app = express()
const port = 3000

const mongoose = require('mongoose')

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/users', (req1, res) => {
    let username = proccess.env.DB_USERNAME
    let password = proccess.env.DB_PASSWORD
    mongoose.connect('mongodb+srv://'+username+':'+password+'@cluster0.8iqby.gcp.mongodb.net/testdario?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true
    }).then(() => {
    console.log('connected to db')
    }).catch((error) => {
    console.log(error)
                        })
    console.log(req1.body)
    res.send(req1.body.pais + 'Hello World Post!')
  })


//Reto crear un registro url
// https://amljs.medium.com/crud-app-in-node-js-and-mongodb-1587923153d6



  app.get('/users', (req1, res) => {
    //console.log(req1.body)
    let sucursales = [
  {
  "Name": "Caballito",
  "key":"162"
  },
  {
  "Name": "Recoleta",
  "key":"531"
  },
  ]
  res.json(sucursales)
  })


  app.get('/customerandfilials', (req1, res) => {
    //console.log(req1.body)
    let data = [
      {
    "Clientes": ["David","Pedro"]
      },
      {
  "Sucursales": ["Paraguay","Argentina"]
      },
    ]
  res.json(data)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
