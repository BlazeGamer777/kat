const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help") return message.reply(`Usage: \`k.ban <@user> <reason>\``);
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Could't find user.");
  if(bUser == "Blaze" || bUser == "@Blaze5023") return message.channel.send("How dare you...");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Ain't Doing it buddy. Nice try. Bing Bong!")
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nice try, no can do.");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("~Banned~")
  .setColor("#15f153")
  .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
  .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Banned In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason);

  let banChannel = message.guild.channels.find(`name`, "incidents");
  if(!banChannel) return message.channel.send("Can't find the incidents channel.");

  message.guild.member(bUser).kick(bReason);
  banChannel.send(banEmbed);

}

module.exports.help = {
  name: "ban"
};
