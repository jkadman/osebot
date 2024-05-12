
// require dotenv
const { token } = require('dotenv').config();
// Require Sequelize
const Sequelize = require('sequelize');
// Require PG
const { Pool } = require('pg');
// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// PostgreSQL pool
const pool = new Pool({
  user: process.env.database_user,
  host: 'localhost',
  database: process.env.database_name,
  password: process.env.database_password,
  port: 5432
})

// code for SQL currently using PSQL
// const sequelize = new Sequelize(process.env.database_name, process.env.database_user, process.env.database_password, {
//   host: 'localhost',
// 	dialect: 'psql',
// 	logging: false,
	// SQLite only
	//storage: 'database.sqlite',
// });

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'addtag') {
		const tagName = interaction.options.getString('name');
		const tagDescription = interaction.options.getString('description');

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
			if (error.name === 'SequelizeUniqueConstraintError') {
				return interaction.reply('That tag already exists.');
			}

			return interaction.reply('Something went wrong with adding a tag.');
		}
	}
});
// client.on(Events.InteractionCreate, async interaction => {
// 	if (!interaction.isChatInputCommand()) return;

// 	const { commandName } = interaction;
// 	// ...
//   if (commandName === 'addcharacter') {
//     const character_name = interaction.options.getString('name');
//     const level = interaction.options.getString('level');

//     // get player name (discord username)
//     const player_name = interaction.user.username;

//     try {
//       const query = {
//         text: 'INSERT INTO character(name, level, player_name) VALUES($1, $2, $3)',
//         values: [character_name, level, player_name]
//       };
//       await pool.query(query);

//       // confirmation message
//       return interaction.reply('Character "${character_name}" added successfully.')
//     }
//     catch (error) {
//       // handle errors
//       return interaction.reply('Something went wrong with add "${character_name}".')
//     }
//   }
// });

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
