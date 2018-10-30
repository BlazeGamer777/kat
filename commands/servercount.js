const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send(`Server count: \`${bot.guilds.size}\``);
}

module.exports.help = {
  name: "servercount"
};
