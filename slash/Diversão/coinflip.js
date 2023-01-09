const { ApplicationCommandType, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, EmbedBuilder} = require('discord.js');

module.exports = {
    name: "coinflip",
    description: "🚀 | Jogue a moeda",

    run: async(interaction, client) => {
        let array = ['Cara', 'Coroa']

        var rand = array[Math.floor(Math.random() * array.length)];

        if(rand === 'Coroa'){
            const embed = new EmbedBcuilder()
            .setColor('BLUE')
            .setDescription(`**A moeda caiu em...**\n\n:crown: | **Coroa**`)
            .setThumbnail('https://media.discordapp.net/attachments/845091740222226462/909057982543843348/11b9d8164d204c7fd48a88a515745c1d.png?width=113&height=113')

            return interaction.reply({ embeds: [embed] })
        }

        else if(rand === 'Cara'){
            const embed = new EmbedBuilder()
            .setColor('BLUE')
            .setDescription(`**A moeda caiu em...**\n\n:smiley: | **Cara**`)
            .setThumbnail('https://media.discordapp.net/attachments/845091740222226462/909057982543843348/11b9d8164d204c7fd48a88a515745c1d.png?width=113&height=113')

            return interaction.reply({ embeds: [embed] })
        }

    }
}