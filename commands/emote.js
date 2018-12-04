const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let name = args[0]
  let imgId = args[1]
  
  message.channel.send('<a:' + name + ':' + imgId '>');
};

module.exports.help = {
  name: "emote"
};
