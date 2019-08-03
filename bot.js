const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("607318916309712908")
setInterval(function() {
channel.send(`ReZoSE YT`);
}, 30)
})

client.login(process.env.BOT_TOKEN);