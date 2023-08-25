const Discord = require('discord.js');
const firebase = require('firebase')
const client = new Discord.Client({ intents: [1, 512, 32768, 2, 128] })

const config = require('./config.json');
const token = config.token;

client.on('messageCreate', message =>{

    const embed_mencao = new Discord.EmbedBuilder()
    .setTitle("Template Bot")
    .setColor("BLUE")
    .setDescription(`Hello ${message.author} How are you? I'm a simple Discord bot **[/]**, my owner name is **crow_ler** To see my commands type /help`)
    .setImage("") //gif or photo if you want
  
    if(message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`){
      return message.channel.send({embeds: [embed_mencao]})
    }
  })
  
  const { initializeApp } = require("firebase/app") ;
  const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  let database = firebase.database()
  
  const fs = require("fs");
  const { readdirSync } = require('fs');
  
  const { REST } = require('@discordjs/rest');
  const { Routes } = require('discord-api-types/v9');
  
  const path = require('path');
  require('colors');
  
  client.commands = new Discord.Collection();
  client.slash = new Discord.Collection();
  client.aliases = new Discord.Collection();
  
  const commands = []
  readdirSync("./slash/").map(async dir => {
      readdirSync(`./slash/${dir}/`).map(async (cmd) => {
      commands.push(require(path.join(__dirname, `./slash/${dir}/${cmd}`)))
      })
  })
  const rest = new REST({ version: "9" }).setToken(token);
  
  (async () => {
      try {
          console.log('Start update commands!'.yellow);
          await rest.put(
              Routes.applicationGuildCommands(config.botID, config.serverID),
              { body: commands },
          );
          console.log('Update finished'.green);
      } catch (error) {
          console.error(error);
      }
  })();
  
  ["events", "slash"].forEach(handler => {
      require(`./handlers/${handler}`)(client);
  });
    
  client.login(config.token);
  
