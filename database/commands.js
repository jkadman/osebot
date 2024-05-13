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

// command to get PCs from characters table
async function getCharacters(interaction) {
  const query = {
      text: 'SELECT * FROM characters;',
  };
console.log('query', query);
  try {
      const res = await pool.query(query);
      if (res.rows.length > 0) {
        const characters = res.rows.map(row => `${row.character_name}, Level ${row.level}, Played by ${row.player_name}`).join('\n');
        return interaction.reply(`Characters:\n${characters}`);
      } else {
        return interaction.reply("Could not access characters");
      }
  } catch (error) {
      console.error('Error getting characters: ', error);
      throw new Error(`Something went wrong with getting the characters.`);
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

// command to get items from equipment table
async function getItems(interaction) {
  const query = {
      text: 'SELECT * FROM equipment;',
  };
console.log('query', query);
  try {
      const res = await pool.query(query);
      if (res.rows.length > 0) {
        const equipment = res.rows.map(row => `${row.item_name}, Magic (0 no, 1 yes)? ${row.magic}, Amount carried ${row.amount_carried}`).join('\n');
        return interaction.reply(`Equipment:\n${equipment}`);
      } else {
        return interaction.reply("Could not access equipment");
      }
  } catch (error) {
      console.error('Error getting equipment: ', error);
      throw new Error(`Something went wrong with getting the equipment.`);
  }
}

    module.exports = {
      addCharacter,
      addItem,
      getCharacters,
      getItems
    };
  
