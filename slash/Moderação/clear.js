const Discord = require('discord.js');

module.exports = {
    name: "clear",
    permissions: "MANAGE_MESSAGES",
    description: "Apagar mensagens do chat",
    options: [
        {
            name: "quantidade_de_mensagens",
            description: "Quantidade de mensagens para apagar",
            type: 4,
            required: true
        }
    ],
    timeout: 5000,
    run: async(interaction, client) => {
        let deleteAmount = interaction.options.getInteger('quantidade_de_mensagens');

        if (deleteAmount > 100) {
            deleteAmount = 100
        }
        await interaction.channel.bulkDelete(+deleteAmount, true);
        interaction.reply({ content: `:tada: | ${interaction.user}, Deletei **${deleteAmount}** mensagens!` })
    }
}