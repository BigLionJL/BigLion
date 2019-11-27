const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.BOT_TOKEN);

client.on('message', message => { 
    if (message.content === '!biglion') {
    var fact;
	fact = Math.ceil(Math.random()*2)
	if (fact == 1) {
        message.channel.send('https://imgur.com/802hv3D');
        message.channel.send('**This pleases Big Lion... for now**');
	}else if(fact == 2){
        message.channel.send('https://imgur.com/ZsbthOi');
        message.channel.send('**This displeases Big Lion, your fate is no longer in your own hands**');
    }
}
	if (message.content === '!darklion') {
       message.channel.send('https://imgur.com/a3mLPJP');
        
    }
	if (message.content === '!gunlion') {
       message.channel.send('https://imgur.com/E4SEluu');
        
    }
	if (message.content === '!pepeD') {
       message.channel.send('https://imgur.com/JWE2cNv');
        
    }
	if (message.content === '!jail') {
  let role = message.guild.roles.find(r => r.name === "Gay Baby Jail");
let member = message.mentions.members.first();
member.addRole(role).catch(console.error);
}
        
    }
})
