const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjM0ODI1Njk5MTg1OTE3OTYy.XapSJg.aVWRPLSXXfLZNwqFaV4Z3w5JznE';
const PREFIX = '/';
var info = ('Version 1.0.0 Created by @ProfMagz on Twitter!');

bot.on('ready', () => {
	console.log('Artic Bot Online!');
	bot.user.setActivity('Funny Cat Videos', {
		type: 'WATCHING'
	}).catch(console.error);
})

bot.on('message', msg => {
	let args = msg.content.substring(PREFIX.length).split(" ");

	switch (args[0]) {
		case 'kick':
			if (!args[1]) msg.channel.send('Please specify a user!')
			const user = msg.mentions.users.first();
			if (user) {
				const member = msg.guild.member(user);

				if (member) {
					member.kick('You were kicked from the server').then(() => {
						msg.reply('Kicked user')

					}).catch(err => {
						msg.reply('Unable to kick member');
						console.log(err);
					})
				} else {
					msg.reply("User is not in the server")
				}
			} else {
				msg.reply('User is not in the server')
			}
			break;
		case 'hey':
			msg.reply('Hey there!');
			break;
		case 'rules':
			msg.reply('Check #rules channel for all rules!');
			break;
		case 'info':
			const embed = new Discord.RichEmbed()
				.setTitle('User info')
				.addField('Player Name', msg.author.username)
				.addField('Current Server', msg.guild.name)
				.setFooter('Version 1.0.0')
				.setThumbnail(msg.author.avatarURL)
				.setColor(990000)
			msg.channel.sendEmbed(embed);
			break;
		case 'hello':
			if (args[1] === 'there') {
				msg.channel.sendMessage('General Kenobi');
			} else {
				msg.channel.sendMessage('Invalid Command!');
			}
			break;
		case 'bot':
			if (args[1] === 'info') {
				msg.channel.sendMessage(info);
			} else {
				msg.channel.sendMessage('Invalid Command!');
			}
			break;
		case 'clear':
			if (!args[1]) return msg.reply('Please specify a number')
			msg.channel.bulkDelete(args[1]);
			break;


	}
})
bot.login(token);