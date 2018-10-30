const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let slot1 = [':seven:', ':cherries:', ':banana:', ':strawberry:', ':watermelon:'];
  let slot2 = [':seven:', ':cherries:', ':banana:', ':strawberry:', ':watermelon:'];
  let slot3 = [':seven:', ':cherries:', ':banana:', ':strawberry:', ':watermelon:'];
  let slot1r = Math.floor((Math.random() * slot1.length))
  let slot2r = Math.floor((Math.random() * slot2.length))
  let slot3r = Math.floor((Math.random() * slot3.length))

  message.channel.send(slot1[slot1r] + ' ' + slot2[slot2r] + ' ' + slot3[slot3r] + '**<**').then((message) => {
    let slot1rr = Math.floor((Math.random() * slot1.length))
    let slot2rr = Math.floor((Math.random() * slot2.length))
    let slot3rr = Math.floor((Math.random() * slot3.length))
    message.edit(slot1[slot1rr] + ' ' + slot2[slot2rr] + ' ' + slot3[slot3rr] + '**<**')
    let slot1rrr = Math.floor((Math.random() * slot1.length))
    let slot2rrr = Math.floor((Math.random() * slot2.length))
    let slot3rrr = Math.floor((Math.random() * slot3.length))
    message.edit(slot1[slot1rrr] + ' ' + slot2[slot2rrr] + ' ' + slot3[slot3rrr] + '**<**')
    let slot1rrrr = Math.floor((Math.random() * slot1.length))
    let slot2rrrr = Math.floor((Math.random() * slot2.length))
    let slot3rrrr = Math.floor((Math.random() * slot3.length))
    message.edit(slot1[slot1rrrr] + ' ' + slot2[slot2rrrr] + ' ' + slot3[slot3rrrr] + '**<**')
    let slot1rrrrr = Math.floor((Math.random() * slot1.length))
    let slot2rrrrr = Math.floor((Math.random() * slot2.length))
    let slot3rrrrr = Math.floor((Math.random() * slot3.length))
    message.edit(slot1[slot1rrrrr] + ' ' + slot2[slot2rrrrr] + ' ' + slot3[slot3rrrrr] + '**<**')
    if(slot1[slot1rrrrr] == slot2[slot2rrrrr] == slot3[slot3rrrrr]){
     return message.channel.send(`Jackpot!`)
    }else if(slot1[slot1rrrrr] == slot2[slot2rrrrr] || slot1[slot1rrrrr] == slot3[slot3rrrrr] || slot2[slot2rrrrr] == slot3[slot3rrrrr] || slot3[slot3rrrrr] == slot1[slot1rrrrr]){
     return message.channel.send(`You won!`)
   }else{
     return message.channel.send(`Better luck next time!`)
    }
  });

  };

module.exports.help = {
  name: "slots"
};
