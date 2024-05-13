const { SlashCommandBuilder } = require('discord.js');
const { addCharacter } = require('../database/commands.js');

// idea for adding gear, will use in conjunction with SQL to add item to database
module.exports = {
	data: new SlashCommandBuilder()
		.setName('addcharacter')
		.setDescription('Add Character to the characters database.')
			.addStringOption(option => 
				option.setName('character_name')
					.setDescription('The name of the character')
					.setRequired(true))
			.addIntegerOption(option =>
				option.setName('level')
					.setDescription('The level of the character')
					.setRequired(true)),
	async execute(interaction) {

		const characterName = interaction.options.getString('character_name');
		const characterLevel = interaction.options.getInteger('level')
		const playerName = interaction.user.username;
		console.log('characterName: ', characterName);
		console.log('characterLevel: ', characterLevel);
		console.log('playerName: ', playerName);
	
		
		try {
			await addCharacter(interaction, playerName, characterName, characterLevel);

		} catch (error) {
			// handle error
			// console.error('Error adding character: ', error);
			console.error('Error adding character: ', error.message);

			await interaction.reply('Failed to add character');
		}
    
    // await interaction.followUp('your item has been added')
      
    
		
	},
};