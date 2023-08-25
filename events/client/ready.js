require('colors')

module.exports = async client => {   

    let activities = [
        `Use /help to see my commands`,
        `I am a bot made in slash [/]`
    ]
    i = 0;
    setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: 'LISTENING' }, {
        type: "WATCHING"
    }), 1000 * 30);

     console.log(`[Discord API] Logged in ${client.user.tag}`.magenta);
};