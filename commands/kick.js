const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help") return message.reply(`Usage: \`k.kick <@user> <reason>\``);

  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Could't find user.");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Ain't Doing it buddy. Nice try. Bing Bong!")
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nice try, no can do.");

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("~Kicked~")
  .setColor("#15f153")
  .addField("Kicked User", `${kUser} with ID: ${kUser.id}`)
  .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Kicked In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", kReason);

  let kickChannel = message.guild.channels.find(`name`, "incidents");
  if(!kickChannel) return message.channel.send("Can't find the incidents channel.");

  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);

}

module.exports.help = {
  name: "kick"
};
