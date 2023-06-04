require("dotenv").config();
const { SlashCommandBuilder } = require('discord.js');
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI,
});
const openai = new OpenAIApi(configuration);

module.exports = {
    data: new SlashCommandBuilder()
      .setName('imagine')
      .setDescription('ask pumpkin bot something!')
      .addStringOption(option =>
		option.setName('input')
		  .setDescription('what do you want to ask?')
          .setRequired(true)),
  async execute(interaction) {
    if(interaction.member.id=="216862330724548608"){
      await interaction.deferReply();
      let prompt = interaction.options.getString('input');
      let response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "256x256",
      });

      await interaction.editReply(response.data.data[0].url);
    }else{
        interaction.reply(`this option cost 0.020$ per image, pay me to use (dm)`);
    }
  },
};