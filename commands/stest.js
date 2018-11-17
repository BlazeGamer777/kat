const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  async function shitty() {
        let imgs = Math.floor(Math.random() * 80);
        let url = ['https://www.reddit.com/r/copypasta/top/.json?sort=top&t=week&limit=500'];
        request({
        method: 'GET',
        uri: url[Math.floor(Math.random() * url.length)]
        }, function (err, response, data) {
       if(err) {
       console.log(err, null);
       return;
       }

  data = JSON.parse(data);
  var mainObj = data.data.children;
  var urls = {};

  for(let i = 0; i < mainObj.length; i++) {
  let url = mainObj[i].data.selftext;
  urls[i+1] = url;
    }
  let shitPost1 = urls[imgs];
  if (shitPost1 > 2048) return message.reply("this shitpost is way too long to send over Discord. Please try agian.");
  const embed = new Discord.RichEmbed()
  .setTitle("Shitpost :ok_hand:")
  .setColor("RANDOM")
  .setDescription(urls[imgs])
  message.channel.send({embed});
})
        }
        shitty();

}

module.exports.help = {
  name: "stest"
};
