const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const dog = require('random-puppy');
// npm install --save random-puppy


client.on('ready',() => {
    console.log('coco');
})
client.on('message', message => {
  if (message.content.startsWith ('puppy')|| message.content.startsWith ('puppies')||message.content.startsWith ('doggo')||message.content.startsWith ('doggos')||message.content.startsWith ('pupper')||message.content.startsWith ('baby')||message.content.startsWith ('goodest boy')) {
    dog()
      .then(url => {
        message.reply(url)
        })
      };
  });
client.login(settings.token);