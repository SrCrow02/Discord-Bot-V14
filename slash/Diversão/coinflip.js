const { EmbedBuilder} = require('discord.js');

module.exports = {
    name: "coinflip",
    description: "🚀 | Toss the coin",

    run: async(interaction, client) => {
        let array = ['heads', 'tails']

        var rand = array[Math.floor(Math.random() * array.length)];

        if(rand === 'tails'){
            const embed = new EmbedBcuilder()
            .setColor('BLUE')
            .setDescription(`**The coin falls...**\n\n:crown: | **tails**`)
            .setThumbnail('https://media.discordapp.net/attachments/845091740222226462/909057982543843348/11b9d8164d204c7fd48a88a515745c1d.png?width=113&height=113')

            return interaction.reply({ embeds: [embed] })
        } else if(rand === 'heads'){
            const embed = new EmbedBuilder()
            .setColor('BLUE')
            .setDescription(`**The coin falls...**\n\n:smiley: | **heads**`)
            .setThumbnail('https://media.discordapp.net/attachments/845091740222226462/909057982543843348/11b9d8164d204c7fd48a88a515745c1d.png?width=113&height=113')

            return interaction.reply({ embeds: [embed] })
        }
    }
}