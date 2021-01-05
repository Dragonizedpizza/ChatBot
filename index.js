const Discord = require("discord.js");
const client = message.client;
const chatcord = require("chatcord");
const config = require('./config.json');
const prefix require('./config.json');

let ai = new chatcord.Client();

client.on("ready", async () => {

    console.log("Chatbot is online!");

});

client.on('message', async message => {

    if (message.author.bot) return;

if(message.channel.id !== config.chatID) {
    let content = message.content     
if(content.startsWith === prefix + 'ping') {

const msg = await message.channel.send("Pinging...").then(msg => { msg.edit(`⌛ Latency is ${msg.createdTimestamp - message.createdTimestamp}ms\n⏲️ API Ping is ${(client.ws.ping)}`)})
return;

}
    message.channel.startTyping()
    await ai.chat(content).then(r => message.channel.send(r)); 
    message.channel.stopTyping()
    }})



client.login(config.token);

 
