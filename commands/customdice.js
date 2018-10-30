const Discord = require("discord.js");
const thing = require("./dice.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help") return message.reply(`Usage: \`k.customdice <min number> <max number>\` ***PLEASE USE NUMBERS NOT WORDS!***`);
function randomNumber (min, max){
    var min_value = parseInt(min);
    var max_value = parseInt(max);
    return Math.floor((Math.random() * max_value) + min_value);
  };
  
  message.channel.send(`:game_die: The dice rolled a ` + randomNumber(args[0], args.slice(1).join(" ")) + `!`);
}

module.exports.help = {
  name: "customdice"
};
