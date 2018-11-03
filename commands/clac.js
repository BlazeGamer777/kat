const Discord = require("discord.js");
const math = require("math.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help") return message.reply(`Usage: \`k.calc <math equation>\``);
  if (!args[0]) return message.reply('Please input a math question!');

  let resp;
  try {
    resp = math.eval(args.join(' '));
  } catch (e) {
    return message.reply("Please input a valid equation!");
  }

  let mathe = new Discord.MessageEmbed()
  .setColor('#0ffffff')
  .setTitle("*Calculator*")
  .addField('Input', `\`\`\`js\n${args.join(' ')}\`\`\``)
  .addField('Output', `\`\`\`js\n${resp}\`\`\``);

  message.channel.send(mathe)
}

module.exports.help = {
  name: "calc"
};
