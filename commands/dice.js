const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  function randomNumber (min, max){
    var min_value = parseInt(min);
    var max_value = parseInt(max);
    return Math.floor((Math.random() * max_value) + min_value);
  };
  

  message.channel.send(`:game_die: The dice rolled a ` + randomNumber(1, 6) + `!`);

}

module.exports.help = {
  name: "dice"
};
