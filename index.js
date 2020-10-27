const Discord = require("discord.js");

const client = new Discord.Client();

const chatcord = require("chatcord");

const token = "YOUR_BOT_TOKEN";


let ai = new chatcord.Client();

client.on("ready", async () => {

    console.log("Chatbot is online!");

});

client.on('message', async message => {

    if (message.author.bot) return;

if(message.channel.name.includes('chat')) {
    let content = message.content     

if(content === 'ping') {

const msg = await message.channel.send("Pinging...").then(msg => { msg.edit(`⌛ Latency is ${msg.createdTimestamp - message.createdTimestamp}ms\n⏲️ API Ping is ${(client.ws.ping)}`)})
return;

}
    message.channel.startTyping()
    await ai.chat(content).then(r => message.channel.send(r)); 
    message.channel.stopTyping()
    }})



client.login(token);

 
