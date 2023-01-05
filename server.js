const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send('Connect Me To A 24/7 Hosting || Made By RootPlayZ#0001')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Creator:RootPlayZ#0001")
  })
  
}

module.exports = keepAlive
