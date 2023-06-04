const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
      .setName('info')
      .setDescription('show bot info'),
  async execute(interaction) {

    interaction.reply({ content: `this bot was developed by <@216862330724548608>\nand its the 7th edtion of the "pumpkin bot" lineup`, ephemeral: true });
  },
};