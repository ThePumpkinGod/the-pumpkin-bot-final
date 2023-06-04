const { SlashCommandBuilder } = require('discord.js');
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI,
});
const openai = new OpenAIApi(configuration);

module.exports = {
    data: new SlashCommandBuilder()
      .setName('kill')
      .setDescription('kill an tagged user!')
      .addUserOption(option =>
        option.setName('user')
          .setDescription('tag the user you want to kill!')
          .setRequired(true)),
  async execute(interaction) {
    let id = interaction.options.get('user').value;
    let member = interaction.member.id;


      let response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `<@${member}> didnt like <@${id}> because `,
        suffix: "",
        temperature: 1,
        max_tokens: 1024,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      
      interaction.reply(`<@${member}> killed <@${id}> because `+response.data.choices[0].text);
  },
};