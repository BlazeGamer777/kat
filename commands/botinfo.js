const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help") return message.reply(`Usage: \`k.botinfo\``);
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Bot Info:")
  .setColor("#15f153")
  .setThumbnail(bicon)
  .addField("Bot Name:", bot.user.username)
  .addField("Created On:", bot.user.createdAt)
  .addField("Server Count:", bot.guilds.size);

  return message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
};
