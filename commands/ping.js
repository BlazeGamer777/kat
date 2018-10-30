const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  startTime = Date.now();
  if(args[0] == "help") return message.reply(`Usage: \`k.ping\``);
  return message.channel.send("Getting ping...").then((message) => {
   endTime = Date.now();
   let ping = Math.round(endTime - startTime)
   message.edit(`:ping_pong: Pong! ${ping}ms`)
});

  
}

module.exports.help = {
  name: "ping"
};
