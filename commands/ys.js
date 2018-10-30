const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help") return message.reply(`Usage: \`k.ys\``);
  return message.channel.send(`https://cdn.discordapp.com/attachments/495747056065970176/504133962038247424/kermit-hanging-from-ceiling-meme-faces-empire-fox-the-frog-meme-reaction-pictures-frogs-jokes-photos.jpg`);
}

module.exports.help = {
  name: "ys"
};
