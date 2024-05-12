// Import the testDatabaseConnection function from your database commands file
const { testDatabaseConnection } = require('/home/crow/Documents/programming/osebot/database/commands.js');

// Define your testdb command
const testdbCommand = {
    data: {
        name: 'testdb',
        description: 'Test the connection to the database',
    },
    async execute(interaction) {
        // Call the testDatabaseConnection function to test the database connection
        await testDatabaseConnection(interaction);
    },
};

// Export the testdb command
module.exports = testdbCommand;
