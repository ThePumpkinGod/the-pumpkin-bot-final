const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { getImage } = require('random-reddit');

module.exports = {
    data: new SlashCommandBuilder()
      .setName('meme')
      .setDescription('GIVE ME THOSE MEMEZ'),
  async execute(interaction) {

    const image = await getImage('memes')
    interaction.reply(image);
    
  },
};