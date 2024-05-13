const { SlashCommandBuilder } = require('discord.js');
const { addItem } = require('../database/commands.js');

// idea for adding gear, will use in conjunction with SQL to add item to database
module.exports = {
	data: new SlashCommandBuilder()
		.setName('additem')
		.setDescription('Add an item to the equipment database.')
			.addStringOption(option => 
				option.setName('item_name')
					.setDescription('The name of the item')
					.setRequired(true))
			.addIntegerOption(option =>
				option.setName('magic')
					.setDescription('Is the item magic or not, 0 for false and 1 for true')
					.setRequired(true))
          .addIntegerOption(option =>
            option.setName('amount_carried')
              .setDescription('How many of these items are you carrying')
              .setRequired(true)),
	async execute(interaction) {

		const itemName = interaction.options.getString('item_name');
		const isItMagic = interaction.options.getInteger('magic');
		const amountCarried = interaction.options.getInteger('amount_carried');
		console.log('item_name: ', itemName);
		console.log('magic: ', isItMagic);
		console.log('amount_carried: ', amountCarried);
	
		
		try {
			await addCharacter(interaction, itemName, isItMagic, amountCarried);

		} catch (error) {
			// handle error
			// console.error('Error adding character: ', error);
			console.error('Error adding character: ', error.message);

			await interaction.reply('Failed to add character');
		}
    
    // await interaction.followUp('your item has been added')
      
    
		
	},
};