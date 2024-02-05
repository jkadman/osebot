const { SlashCommandBuilder } = require('discord.js');

let list = 1;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gear')
		.setDescription('List the communal gear our party has obtained'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.get(list);
	},
};