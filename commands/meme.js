const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help") return message.reply(`Usage: \`k.meme\``);
  randomPuppy('memes')
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setTitle("Heres a meme!")
                .setColor("RANDOM")
                .setImage(url);
            message.channel.send({
                embed
            });
        })
}

module.exports.help = {
  name: "meme"
};
