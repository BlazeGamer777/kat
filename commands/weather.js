const Discord = require("discord.js");
const weather = require("weather-js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help") return message.reply(`Usage: \`k.weather <location>\``);
  weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
    if (err) console.log(err);
    let ccurrent = result[0].current;
    let location = result[0].location;
    if (result.length === 0) {
      return message.channel.send("Please send a ***valid*** location!")
    };
    let embed = new Discord.RichEmbed()
        .setDescription(`**${ccurrent.skytext}**`)
        .setAuthor(`Weather for ${ccurrent.observationpoint}`)
        .setThumbnail(ccurrent.imageUrl)
        .setColor('#1569C7')
        .addField('Timezone', `UTC${location.timezone}`, true)
        .addField('Degree Type', location.degreetype, true)
        .addField('Temperature', `${ccurrent.temperature} Degrees`, true)
        .addField('Feels Like', `${ccurrent.feelslike} Degrees`, true)
        .addField('Winds', ccurrent.winddisplay, true)
        .addField('Humidity', `${ccurrent.humidity}%`, true);

    message.channel.send(embed);


  });
}

module.exports.help = {
  name: "weather"
};
