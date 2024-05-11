const { SlashCommandBuilder } = require('discord.js');
const { addCharacter } = require('/home/crow/Documents/programming/osebot/database/commands.js');

// let list = ['sword', ' shield'];

// idea for adding gear, will use in conjunction with SQL to add item to database
module.exports = {
	data: new SlashCommandBuilder()
		.setName('addcharacter')
		.setDescription('Add Character to the characters database.'),
	async execute(interaction) {

		const characterName = interaction.options.getString('characterName');
		const characterLevel = interaction.options.getString('level')
		// async execute()
    // let test = [0];
		try {
			await addCharacter(interaction, characterName, characterLevel);

			// send confirmation
			await interaction.reply('Character successfully added');
		} catch (error) {
			// handle error
			console.error('Error adding gear: ', error);
			await interaction.reply('Failed to add character');
		}
    
    // await interaction.followUp('your item has been added')
      
    
		
	},
};