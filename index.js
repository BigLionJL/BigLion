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
	if (message.content === '!jail') {
        let role = message.guild.roles.find(r => r.name === "Gay Baby Jail");
        let member = message.mentions.members.first();

        if(member.roles.some(r=>["Gay Baby Jail"].includes(r.name)) ) {
            member.removeRole(role).catch(console.error);
          } else {
            member.addRole(role).catch(console.error);
          }
          } else {
            message.channel.send(`Nope, noppers, nadda.`);
          }
        
    }
}
)
