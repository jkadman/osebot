
// require dotenv
const { token } = require('dotenv').config();
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

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);

module.exports = { pool };
