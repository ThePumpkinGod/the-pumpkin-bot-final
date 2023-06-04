const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
      .setName('duck')
      .setDescription('duck an tagged user!')
      .addUserOption(option =>
        option.setName('user')
          .setDescription('tag the user you want to duck!')
          .setRequired(false)),
  async execute(interaction) {

    if(interaction.options.get('user')==undefined){
        interaction.reply("https://gph.is/2Qkj3n6");
    }else{
        let id = interaction.options.get('user').value;
        let member = interaction.member.id;
        await interaction.reply(`<@${member}> sent <@${id}> a duck!`);
        await interaction.followUp("https://gph.is/2Qkj3n6");
    }
  },
};