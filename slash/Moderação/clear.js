const Discord = require('discord.js');

module.exports = {
    name: "clear",
    permissions: "MANAGE_MESSAGES",
    description: "clear messages in channel",
    options: [
        {
            name: "number_of_messages",
            description: "Number of messages to delete",
            type: 4,
            required: true
        }
    ],
    timeout: 5000,
    run: async(interaction, client) => {
        let deleteAmount = interaction.options.getInteger('number_of_messages');

        if (deleteAmount > 100) {
            deleteAmount = 100
        }
        await interaction.channel.bulkDelete(+deleteAmount, true);
        
        return interaction.reply({ content: `:tada: | ${interaction.user}, Deleted **${deleteAmount}** messages!` })
    }
}