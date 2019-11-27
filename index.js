const Discord = require('discord.js');
const { prefix } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.BOT_TOKEN);

client.on('message', message => { 
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	
    if (command === 'biglion') {
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
}
)
