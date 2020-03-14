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
	
	
		if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const serverQueue = queue.get(message.guild.id);

	if (command === 'play') {
		execute(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${prefix}skip`)) {
		skip(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${prefix}stop`)) {
		stop(message, serverQueue);
		return;
	} else {
		message.channel.send('You need to enter a valid command!')
	}
	
	
	
	
	
	
	
	
	
	

}
	  async function execute(message, serverQueue) {
	const args = message.content.split(' ');

	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send('I need the permissions to join and speak in your voice channel!');
	}

	const songInfo = await ytdl.getInfo(args[1]);
	const song = {
		title: songInfo.title,
		url: songInfo.video_url,
	};

	if (!serverQueue) {
		const queueContruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true,
		};

		queue.set(message.guild.id, queueContruct);

		queueContruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueContruct.connection = connection;
			play(message.guild, queueContruct.songs[0]);
		} catch (err) {
			console.log(err);
			queue.delete(message.guild.id);
			return message.channel.send(err);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		return message.channel.send(`${song.title} has been added to the queue!`);
	}

}

function skip(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	if (!serverQueue) return message.channel.send('There is no song that I could skip!');
	serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', () => {
			console.log('Music ended!');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}

)
