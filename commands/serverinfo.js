const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help") return message.reply(`Usage: \`k.servercount\``);
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("Server Info:")
  .setColor("#15f153")
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)
  .addField("Created On", message.guild.createdAt)
  .addField("You Joined on", message.member.joinedAt)
  .addField("Total Members", message.guild.memberCount);

  return message.channel.send(serverembed);
}

module.exports.help = {
  name: "serverinfo"
};
