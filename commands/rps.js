const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help") return message.reply(`Usage: \`k.rps <rock, paper, scissors>\``);
  function randomnum (low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

  if (!args[0]) return message.channel.send("Choose etheir \`Rock\`, \`Paper\`, or \`Scissors\`!");
  let rps = 0;
  rps = randomnum(1,3);

  return message.channel.send("Rock,").then((message) => {
    message.edit("Paper,")
    message.edit("Scissors,")
    message.edit("Shoot!")

    if (args[0] === "paper"){
      if (rps == 1){
        message.edit("I choose Scissors :scissors:! Yes, I won! :grinning: ")
      }else if (rps == 2){
        message.edit("I choose Paper :page_facing_up:! Tie! :astonished: ")
      }else if (rps == 3){
        message.edit("I choose Rock <:rock:503683039130419201>! Oh no, I lost! :cry: ")
      }
    };

  if (args[0] === "rock"){
    if (rps == 1){
      message.edit("I choose Scissors :scissors:! Oh no, I lost! :cry:")
    }else if (rps == 2){
      message.edit("I choose Paper :page_facing_up:! Yes, I won! :grinning: ")
    }else if (rps == 3){
      message.edit("I choose Rock <:rock:503683039130419201>! Tie! :astonished: ")
    }
  };

  if (args[0] === "paper"){
    if (rps == 1){
      message.edit("I choose Scissors :scissors:! Yes, I won! :grinning: ")
    }else if (rps == 2){
      message.edit("I choose Paper :page_facing_up:! Tie! :astonished: ")
    }else if (rps == 3){
      message.edit("I choose Rock <:rock:503683039130419201>! Oh no, I lost! :cry: ")
    }
  };

  if (args[0] === "scissors"){
    if (rps == 1){
      message.edit("I choose Scissors :scissors:! Tie! :astonished: ")
    }else if (rps == 2){
      message.edit("I choose Paper :page_facing_up:! Oh no, I lost! :cry: ")
    }else if (rps == 3){
      message.edit("I choose Rock <:rock:503683039130419201>! Yes, I won! :grinning: ")
    }
  };

});

  if (args[0] === "rock"){
    if (rps == 1){
      message.channel.send("I choose Scissors :scissors:!")
      message.channel.send(`Oh no, I lost! :cry:`)
    }else if (rps == 2){
      message.channel.send("I choose Paper :page_facing_up:!")
      message.channel.send("Yes, I won! :grinning: ")
    }else if (rps == 3){
      message.channel.send("I choose Rock <:rock:503683039130419201>!")
      message.channel.send("Tie! :astonished: ")
    }
  };

  if (args[0] === "paper"){
    if (rps == 1){
      message.channel.send("I choose Scissors :scissors:!")
      message.channel.send("Yes, I won! :grinning: ")
    }else if (rps == 2){
      message.channel.send("I choose Paper :page_facing_up:!")
      message.channel.send("Tie! :astonished: ")
    }else if (rps == 3){
      message.channel.send("I choose Rock <:rock:503683039130419201>!")
      message.channel.send("Oh no, I lost! :cry: ")
    }
  };

  if (args[0] === "scissors"){
    if (rps == 1){
      message.channel.send("I choose Scissors :scissors:!")
      message.channel.send("Tie! :astonished: ")
    }else if (rps == 2){
      message.channel.send("I choose Paper :page_facing_up:!")
      message.channel.send("Oh no, I lost! :cry: ")
    }else if (rps == 3){
      message.channel.send("I choose Rock <:rock:503683039130419201>!")
      message.channel.send("Yes, I won! :grinning: ")
    }
  };
}

module.exports.help = {
  name: "rps"
};
