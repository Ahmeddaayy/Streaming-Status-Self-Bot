const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send('Please connect me into a hosting website to enable 24/7 hosting. ItzNexus#5354')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Creator: !        𝑨𝒉𝒎𝒆𝒅. </$  𓆩🍷𓆪")
  })
}

module.exports = keepAlive
