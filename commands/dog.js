const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help") return message.reply(`Usage: \`k.dog\``);
  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  let dogembed = new Discord.RichEmbed()
  .setColor("#ff9900")
  .setTitle("HSSSSSSH")
  .setImage(body.url);

  message.channel.send(dogembed);
}

module.exports.help = {
  name: "dog"
}
