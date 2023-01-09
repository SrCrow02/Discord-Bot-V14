const { EmbedBuilder } = require('discord.js');
module.exports = {
    name: "ping",
    description: "🧠 | Ver velocidade do bot",
    timeout: 5000,
    run: async(interaction, client) => {

        //Emoji
        const ms = client.emojis.cache.find(emoji => emoji.name === "ping~1");

        await interaction.reply('🏓 Pong!')

        const msg = await interaction.fetchReply()  

        const embed = new EmbedBuilder()
        .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
        .setColor('BLUE')
        .setTimestamp()
        .setDescription(`${ms} | **API:** ${client.ws.ping}ms.`)
        interaction.editReply({ embeds: [embed], content: `<@${interaction.user.id}>` })
    }
}