
// require dotenv
const { token } = require('dotenv').config();
// Require Sequelize
const Sequelize = require('sequelize');
// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const sequelize = new Sequelize(process.env.database_name, process.env.database_user, process.env.database_password, {
  host: 'localhost',
	dialect: 'psql',
	logging: false,
	// SQLite only
	//storage: 'database.sqlite',
});

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, readyClient => {
  Tags.sync();
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;
	// ...
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
