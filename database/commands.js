const { pool } = require('./index');


async function addCharacter(interaction, player_name, character_name, level) {
  const query = {
      text: 'INSERT INTO characters(player_name, character_name, level) VALUES($1, $2, $3)',
      values: [player_name, character_name, level]
  };
console.log('query', query);
  try {
      await pool.query(query);
      return interaction.reply(`Character "${character_name}" added successfully.`);
  } catch (error) {
      console.error('Error adding character: ', error);
      throw new Error(`Something went wrong with adding ${character_name}.`);
  }
}

    module.exports = {
      addCharacter
    };
  
