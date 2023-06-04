const { SlashCommandBuilder } = require('discord.js');
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI,
});
const openai = new OpenAIApi(configuration);

module.exports = {
    data: new SlashCommandBuilder()
      .setName('ask')
      .setDescription('ask pumpkin bot something!')
      .addStringOption(option =>
		option.setName('input')
		  .setDescription('what do you want to ask?')
          .setRequired(true)),
  async execute(interaction) {
      await interaction.deferReply();
      let qestion = interaction.options.getString('input');
      let completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {"role": "system", "content": `You are a helpful assistant named "Pumpkin Bot", all your message will be sent in discord so please use the discord formatting like every other discord user would!`},
          {role: "user", content: qestion }],
      });
      let msgTooLong = completion.data.choices[0].message.content;
	  if(msgTooLong.length > 1999){
          await interaction.editReply(`the output is too long, please try something else`);
      }else{
          await interaction.editReply(`${completion.data.choices[0].message.content}`);
      }
  },
};
