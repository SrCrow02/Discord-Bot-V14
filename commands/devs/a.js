module.exports = {
    name: "a",
    description: "eval",
    run: async messageCreate => {
        messageCreate.channel.send({ content: 'Hello!'})
        console.log("A")
    }
}