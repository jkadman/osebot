const { SlashCommandBuilder } = require('discord.js');

// test command for bot
module.exports = {
	data: new SlashCommandBuilder()
		.setName('cling')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('clang!');
		// await wait(2_000);
		// await interaction.editReply('Pong again!');
	},
};
