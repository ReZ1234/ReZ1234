const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("608792503096705097")
setInterval(function() {
channel.send(`ReZoSE YT`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
