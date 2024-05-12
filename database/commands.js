const { pool } = require('pg');

// command to add character to database
async function addCharacter(interaction) {
      const character_name = interaction.options.getString('name');
      const level = interaction.options.getString('level');
      // get player name (discord username)
      const player_name = interaction.user.username;
  
      try {
        const query = {
          text: 'INSERT INTO character(character_name, level, player_name) VALUES($1, $2, $3)',
          values: [character_name, level, player_name]
        };
        await pool.query(query);
  
        // confirmation message
        return 'Character "${character_name}" added successfully.';
      }
      catch (error) {
        // handle errors
        console.error('Error adding character: ', error);
        throw new Error('Something went wrong with add "${character_name}".');
      }
    }

    module.exports = {
      addCharacter
    };
  
