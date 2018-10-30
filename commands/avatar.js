const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("Getting avatar...");
  let target = message.mentions.users.first() || message.author;

  await message.channel.send({files: [
     {
       attachment: target.displayAvatarURL,
       name: "avatar.png"
     }
  ]});
}

module.exports.help = {
  name: "avatar"
};
