//const { Pool } = require('pg');
const { pool } = require('./index');

// command to add character to database
// async function addCharacter(interaction) {
//       const character_name = interaction.options.getString('name');
//       const level = interaction.options.getString('level');
//       // get player name (discord username)
//       const player_name = interaction.user.username;
  
//       try {
//         const query = {
//           text: 'INSERT INTO characters(character_name, level, player_name) VALUES($1, $2, $3)',
//           values: [character_name, level, player_name]
//         };
//         // const query = {
//         //   text: 'SELECT * FROM characters',
//         // };
//         console.log('query', query);
//         console.log('pool', pool);
//         await pool.query(query);
  
//         // confirmation message
//         return `Character ${character_name} added successfully.`;
//       }
//       catch (error) {
//         // handle errors
//         console.error('Error adding character: ', error);
//         throw new Error(`Something went wrong with add ${character_name}.`);
//       }
//     }
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
  
