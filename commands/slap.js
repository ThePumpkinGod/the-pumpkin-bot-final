const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
      .setName('slap')
      .setDescription('slap an tagged user!')
      .addUserOption(option =>
        option.setName('user')
          .setDescription('tag the user you want to slap!')
          .setRequired(true)),
  async execute(interaction) {
    let id = interaction.options.get('user').value;
    let member = interaction.member.id;

    interaction.reply(`<@${member}> slapped <@${id}>`);
  },
};