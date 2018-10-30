const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help") return message.reply(`Usage: \`k.8ball <question>\``);
  if(!args[0]) return message.reply("Ask a question!");
  let replies = ['It is certain.',
'It is decidedly so.',
'Without a doubt.',
'Yes - definitely.',
'You may rely on it.',
'As I see it, yes.',
'Most likely.',
'Outlook good.',
'Signs point to yes.',
'Reply hazy, try again.',
'Ask again later.',
'Better not tell you now.',
'Cannot predict now.',
'Concentrate and ask again.',
'My reply is no.',
'My sources say no.',
'Outlook not so good.',
'Very doubtful.'
];

  let result = Math.floor((Math.random() * replies.length))
  let question = args.slice(1).join(" ");

  message.channel.send(`:8ball: The 8ball says... 
        ${replies[result]}`);
}

module.exports.help = {
  name: "8ball"
}
