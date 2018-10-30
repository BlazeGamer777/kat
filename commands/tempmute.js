const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help") return message.reply(`Usage: \`k.tempmute <@user> <time> (ex. 1h = 1 hour)\``);
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldnt find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Cant't mute that person!");
  let muterole = message.guild.roles.find(`name`, "Muted");
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.reply("Time please. Thanks!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted. Better watch out.`)
  }, ms(mutetime));

}

module.exports.help = {
  name: "tempmute"
}
