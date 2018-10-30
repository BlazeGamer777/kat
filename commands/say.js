const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[0]) return message.reply("Make me say something!");
  let say = args.slice(0).join(" ");
  message.channel.send(say);
}

module.exports.help = {
  name: "say"
};
