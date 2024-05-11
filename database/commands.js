const { pool } = require('./pool');

// command to add character to database
async function addCharacter(interaction) {
  
    if (!interaction.isChatInputCommand()) return;
  
    const { commandName } = interaction;
    // ...
    if (commandName === 'addcharacter') {
      const character_name = interaction.options.getString('name');
      const level = interaction.options.getString('level');
  
      // get player name (discord username)
      const player_name = interaction.user.username;
  
      try {
        const query = {
          text: 'INSERT INTO character(name, level, player_name) VALUES($1, $2, $3)',
          values: [character_name, level, player_name]
        };
        await pool.query(query);
  
        // confirmation message
        return interaction.reply('Character "${character_name}" added successfully.')
      }
      catch (error) {
        // handle errors
        return interaction.reply('Something went wrong with add "${character_name}".')
      }
    }
  
}