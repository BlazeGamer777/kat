const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let id = args[0]
  
  message.channel.send('<:baaa:' + id + '>');
};

module.exports.help = {
  name: "emote"
};
