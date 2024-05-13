const { SlashCommandBuilder } = require('discord.js');
const { getCharacters } = require('../database/commands.js');

// get characters slash command
module.exports = {
	data: new SlashCommandBuilder()
		.setName('getcharacters')
		.setDescription('Get from the characters database.'),
	async execute(interaction) {
		
		try {
			await getCharacters(interaction);

		} catch (error) {
			// handle error
			console.error('Error getting characters: ', error.message);

			await interaction.reply('Failed to get characters');
		}
    
	},
};