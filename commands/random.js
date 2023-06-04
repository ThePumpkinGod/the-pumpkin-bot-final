const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('random')
    .setDescription('generate a random number')
    .addIntegerOption(option =>
      option.setName('min')
        .setDescription('The minimum number')
        .setRequired(true))
    .addIntegerOption(option =>
      option.setName('max')
        .setDescription('The maximum number')
        .setRequired(true)),
  async execute(interaction) {
    const min = interaction.options.getInteger('min');
    const max = interaction.options.getInteger('max');
    const result = Math.floor(Math.random() * (max - min + 1) + min);
    await interaction.reply(`Your random number is: ${result}`);
  },
};