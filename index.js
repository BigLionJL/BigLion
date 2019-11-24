const Discord = require('discord.js');
const {prefix, token}=require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.NjQ4MjUyMDQzNjU5NzA2Mzk3.XdriEg.sdaesNW-a2V4Nw70G8jGrQeQ8us);

client.on('message', message => { 
    if (message.content.startsWith(`${prefix}biglion`)) {
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
    if (message.content.startsWith(`${prefix}jail`)) {
        if(message.member.roles.some(role => role.name === 'Mods')) {
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
