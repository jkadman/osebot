const { SlashCommandBuilder } = require('discord.js');
const { getItems } = require('../database/commands.js');

// get characters slash command
module.exports = {
	data: new SlashCommandBuilder()
		.setName('getitems')
		.setDescription('Get items from the characters database.'),
	async execute(interaction) {
		
		try {
			await getItems(interaction);

		} catch (error) {
			// handle error
			console.error('Error getting equipment: ', error.message);

			await interaction.reply('Failed to get equipment');
		}
    
	},
};