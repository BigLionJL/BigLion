const Discord = require('discord.js');
const { prefix } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.BOT_TOKEN);

client.on('message', message => { 
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const queue = new Map();
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
	if (command === 'jail') {
		if(message.member.roles.find(r => r.name === "Admin") || message.member.roles.find(r => r.name === "Mods")){
		  let role = message.guild.roles.find(r => r.name === "Gay Baby Jail");
		  let member = message.mentions.members.first();
			if(member.roles.some(r=>["Gay Baby Jail"].includes(r.name)) ) {
  			member.removeRole(role).catch(console.error);
			message.channel.send('**User has been removed from Gay Baby Jail**');
			} else {
			member.addRole(role).catch(console.error);
			message.channel.send('**User has been sent to Gay Baby Jail**');
			}
		  } else {
			message.channel.send('Suck Eggs Nerd, you cant use this command');
	}
}
if (command === 'simp') {
		  let member = message.mentions.members.first();
		let memberString = member.toString();
	message.channel.send("Listen uhh");
	message.channel.send(memberString);
	message.channel.send("There's no easy way to say this but uhh...\n Look... \n You're a simp. \n I'm gonna have to report you back to Kuzco.");
	
			
}
	if (command === 'darklion') {
	message.channel.send('https://imgur.com/a3mLPJP');	
	}
	if (command === 'gunlion') {
       message.channel.send('https://imgur.com/E4SEluu');
    }
	if (command === 'pepegagun') {
       message.channel.send('https://imgur.com/e7bw4xP');
    }
	if (command === 'pog') {
       message.channel.send('https://tenor.com/ZiI7.gif');
	message.channel.send('https://imgur.com/PUxTJP9');
    }
	if (command === 'damn') {
       message.channel.send('https://imgur.com/RR4HKOW');
	message.channel.send('**You kinda got to shut up now**');
    }
	
	if (command === 'commands') {
        message.channel.send('**!jail and an @ed User** will add/remove the @ed user in Gay Baby Jail\n **!biglion** will decide your fate in a true 50/50\n **!darklion** is a spooky fellow, be advised \n **!gunlion** is a straight up G\n **!PepegaGun** is a master of the shoot\n **!damn**... wins any argument\n **!simp and an @ed User**... Kuzco will not be happy\n **!pog**... ANY POGGERS IN THE CHAT?');
    }
	
	
	
	


}
)
