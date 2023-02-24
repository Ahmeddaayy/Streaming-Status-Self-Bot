const keepAlive = require("./server")
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
const { Client } = require('discord.js-selfbot-v11')
const client = new Client();

client.on('ready', () => { 
  client.user.setActivity("Ahmed On Top Baby.", {type: "STREAMING", url: "https://twitch.tv/discord"})
   console.log(`Successfully enabled Streaming Mode.`)
})

keepAlive()
client.login(TOKEN);
