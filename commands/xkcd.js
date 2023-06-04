//https://xkcd.com/info.0.json
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
var request = require('request');

module.exports = {
    data: new SlashCommandBuilder()
      .setName('xkcd')
      .setDescription('let me send you a comic'),
  async execute(interaction) {
    var options = {
        'method': 'GET',
        'url': 'https://xkcd.com/info.0.json',
        'headers': {
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        let temp = JSON.parse(response.body);
        let randomNumber = Math.floor(Math.random() * temp.num) + 1;
        interaction.reply(`https://xkcd.com/${randomNumber}/`);
    });
  },
};





