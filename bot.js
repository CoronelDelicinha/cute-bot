const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const animal = require('./get');
// npm install --save random-puppy
var choice;

function animalSelect (message) {

  if (message === 'puppy' || message ==='puppies'||message ==='doggo'||message ==='doggos'
  ||message ==='pupper'||message ==='baby'||message ==='goodest boy') {
    return 'puppies';
  }
  if (message === 'kitty' || message ==='kitten'||message ==='cat'||message ==='satan spawn') {
    return 'kittens';
  }
  if (message === 'rat' || message ==='fluff'||message ==='hamham'||message ==='hamtaro'
  ||message ==='little shit') {
    return 'hamster';
  }
  if (message === 'birb' || message ==='ugly'||message ==='dumb'||message ==='feathery idiot'
  ||message ==='AAAAAAAAAA') {
    return 'birb';
  }
  return 'null';
}

client.on('ready',() => {
    console.log('coco');
})
client.on('message', message => {
  const fluff = animalSelect(message.content);
  if (fluff === 'null') {
    return;
  }
  if (message.author === client.user) {
    return;
  }
  console.log(fluff);
  animal(fluff)
    .then(url => {
        message.channel.send(url);
        console.log("ok");
    })
    .catch(console.log("not ok"))
});
client.login(settings.token);