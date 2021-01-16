const express = require("express")

const app = express()
const port = 3000

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req1, res) => {
    console.log(req1.body)
    res.send(req1.body.pais + 'Hello World Post!')
  })

  app.get('/sucursales', (req1, res) => {
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