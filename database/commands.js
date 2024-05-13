const { pool } = require('./index');

// command to add PC to characters
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

// command to add Item to equipment
async function addItem(interaction, item_name, magic, amount_carried) {
  const query = {
      text: 'INSERT INTO equipment(item_name, magic, amount_carried) VALUES($1, $2, $3)',
      values: [item_name, magic, amount_carried]
  };
console.log('query', query);
  try {
      await pool.query(query);
      return interaction.reply(`Your "${item_name}" has been added successfully.`);
  } catch (error) {
      console.error('Error adding item: ', error);
      throw new Error(`Something went wrong with adding ${item_name}.`);
  }
}

    module.exports = {
      addCharacter,
      addItem
    };
  
