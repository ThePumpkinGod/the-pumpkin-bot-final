const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
require("dotenv").config();
const fs = require('node:fs');
const path = require('node:path');

var clientId = process.env.clientId;
var guildId = process.env.guildId;
var token = process.env.DISCORD_BOT_TOKEN;

//var token = process.env['DISCORD_BOT_TOKEN']
//var guildId = process.env['guildId']
//var clientId = process.env['clientId']

const rest = new REST({ version: '10' }).setToken(token);

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  commands.push(command.data.toJSON());
}

rest.put(Routes.applicationCommands(clientId), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error);


/* removing a command from the list

// for guild-based commands
rest.delete(Routes.applicationGuildCommand(clientId, guildId, 'commandId'))
  .then(() => console.log('Successfully deleted guild command'))
  .catch(console.error);

// for global commands
rest.delete(Routes.applicationCommand(clientId, 'commandId'))
  .then(() => console.log('Successfully deleted application command'))
  .catch(console.error);

*/