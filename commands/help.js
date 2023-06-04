const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('List all commands')
		.addStringOption(option =>
			option.setName('category')
				.setDescription('The gif category')
				.setRequired(true)
				.addChoices(
					{ name: 'Fun', value: 'fun' },
					{ name: 'AI', value: 'ai' },
					{ name: 'Misc.', value: 'misc' },
				)),
	async execute(interaction) {
	const selectedCommand = interaction.options.getString('category');

	switch(selectedCommand) {
		
	case 'fun':	
		var exampleEmbed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle("fun's command list")
			.addFields(
				{ name: '/help', value: 'shows this output' },
				{ name: '/slap', value: 'tag the user you want to slap!' },
				{ name: '/kill', value: 'tag the user you want to kill!' },
				{ name: '/flip', value: 'flip a coin to see your fate' },
				{ name: '/duck', value: 'tag the user you want to duck!' },
				{ name: '/xkcd', value: 'let me send you a comic!' },
				{ name: '/meme', value: 'let me send you a meme!' },
			)
			.setTimestamp()

		interaction.reply({ ephemeral: true, embeds: [exampleEmbed] });

	case 'misc':
		var exampleEmbed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle("misc's command list")
			.addFields(
				{ name: '/help', value: 'shows this output' },
				{ name: '/info', value: `shows bot's info` },
			)
			.setTimestamp()

		interaction.reply({ ephemeral: true, embeds: [exampleEmbed] });		

	case 'ai':
		var exampleEmbed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle("AI's command list")
			.addFields(
				{ name: '/help', value: 'shows this output' },
				{ name: '/ask', value: 'ask pumpkin bot something!' },
				{ name: '/imagine', value: 'ask pumpkin bot create something!' },
			)
			.setTimestamp()

		interaction.reply({ ephemeral: true, embeds: [exampleEmbed] });	

	}

	},
};