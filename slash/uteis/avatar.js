const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "avatar",
    description: "🧠 | Pegar avatar de um membro",
    options: [
        {
            name: "user",
            description: "O usuario que deseja pegar o avatar",
            type: 6,
        }
    ],
    run: async(interaction) => {
        const user = interaction.options.getUser('user') || interaction.user;

        const embed = new EmbedBuilder()
        .setColor('#00BFFF')       
        .setDescription(`**Clique [aqui](${user.displayAvatarURL({ dynamic: true, size: 4096 })}) para baixar o avatar**`)
        .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
        .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        return interaction.reply({ embeds: [embed] })
    }
}