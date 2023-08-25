const Timeout = new Set()
const { EmbedBuilder } = require('discord.js');
const humanizeDuration = require("humanize-duration");
const config = require('../../config.json');

module.exports = async(client, interaction) => {
    if (interaction.isCommand() || interaction.isContextMenu()) {
		if (!client.slash.has(interaction.commandName)) return;
		if (!interaction.guild) return;
		const command = client.slash.get(interaction.commandName)
		try {
			if (command.timeout) {
				if (Timeout.has(`${interaction.user.id}${command.name}`)) {
					const embed = new EmbedBuilder()
					.setTitle('You need wait')
					.setDescription(`You need wait **${humanizeDuration(command.timeout, { round: true })}** to use this command again!`)
					.setColor('#ff0000')
					return interaction.reply({ embeds: [embed], ephemeral: true })
				}
			}
			if (command.permissions) {
				if (!interaction.member.permissions.has(command.permissions)) {
					const embed = new EmbedBuilder()
					.setTitle('Falta permissão')
					.setDescription(`:x: You need\`${command.permissions}\` to use this command!`)
					.setColor('#ff0000')
					.setFooter(interaction.user.tag, interaction.user.displayAvatarURL({ dynamic: true }))
					.setTimestamp()
					return interaction.reply({ embeds: [embed], ephemeral: true })
				}
			}
			if (command.devs) {
				if (!config.ownersID.includes(interaction.user.id)) {
					return interaction.reply({ content: ":x: just DEVS can use this command", ephemeral: true });
				}
			}
			if (command.ownerOnly) {
				if (interaction.user.id !== interaction.guild.ownerId) {
					return interaction.reply({ content: "just ADMs can use this command", ephemeral: true })
				}
			}
			command.run(interaction, client);
			Timeout.add(`${interaction.user.id}${command.name}`)
			setTimeout(() => {
				Timeout.delete(`${interaction.user.id}${command.name}`)
			}, command.timeout);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: ':x: An error occurred while executing this command!', ephemeral: true });
		}
	}
} 