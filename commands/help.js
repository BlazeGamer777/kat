const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let helpEmbed = new Discord.RichEmbed()
  .setTitle("Help:")
  .setColor("#BCE8FA")
  .setDescription(`Use \`help\` after any command to get its usage!`)
  .addField("~Mod~   :tools: ", `\`kick\`, \`ban\`, \`tempmute\`, \`removerole\` ,\`addrole\``)
  .addField("~Fun~   :tada: ", `\`8ball\`, \`cat\`, \`dog\`, \`meme\` ,\`rps\` ,\`weather\`,\`dice\` ,\`customdice\` ,\`slots\`,\`urban\` ,\`randomurban\``)
  .addField(`~Economy~   :money_with_wings: `, `***Under Maintenance!***

\`level\`, \`coins\``)
  .addField("~Bot~   :robot: ", `\`prefix\`, \`ping\`, \`botinfo\`,\`serverinfo\`, \`servercount\`, \`avatar\``)
  .setThumbnail('https://cdn.discordapp.com/avatars/503358607665004564/36556880bcba0778ecb003c32f353e71.png?size=128')
  .setFooter("Made by Blaze#5023! | Prefix: k.");

  if(args[0] == "dm"){
   message.author.send(helpEmbed);
   message.channel.send("I sent you it in DM's! :mailbox: ");
  }else if(!args[0]){
   message.channel.send(helpEmbed);
  };
}

module.exports.help = {
  name: "help"
};
