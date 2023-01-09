require('colors')

module.exports = async client => {   

    let activities = [
        `Utilize /help pra ver meus comandos!`,
        `Sou uma bot feita em slash [/]`
    ]
    i = 0;
    setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: 'LISTENING' }, {
        type: "WATCHING"
    }), 1000 * 30);

     console.log(`[Discord API] Logado em ${client.user.tag}`.magenta);
};