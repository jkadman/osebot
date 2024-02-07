const { SlashCommandBuilder } = require('discord.js');

let list = ['sword', ' shield'];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getgear')
		// .setName('getPC')
		.setDescription('List the communal gear our party has obtained'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(`Here is your list: ${list}`);
	},
};