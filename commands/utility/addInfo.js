const { SlashCommandBuilder } = require('discord.js');

let list = ['sword', ' shield'];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('addgear')
		.setDescription('Add gear to the commununal gear list.'),
	async execute(interaction) {
    let test = [0];

    await interaction.reply('what would you like to add?')
    await interaction.followUp('your item has been added')
      
    
		
	},
};