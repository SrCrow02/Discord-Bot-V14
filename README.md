# Create Discord Bot

A module-based Discord bot template.

## Getting started

### Register a Discord bot application

1. Go to Discord's [Developer Portal](https://discord.com/developers/applications).
2. Create a new application.

   > Take note of the `APPLICATION ID` on the General Information tab page. You will need it to invite the bot to your server in step 5.

3. Go to the Bot tab and add a bot user to your application.

   > Take note of the `TOKEN` on the Bot tab page. You will need it in step 3 of the next section.

   > Keep your token and any file containing it **private**. If it ever leaks or you suspect it may have leaked, simply `regenerate` a new token to invalidate your compromised token.

4. While in the Bot tab, scroll down to the Privileged Gateway Intents section and enable the toggles for both `Presence Intent` and `Server Members Intent`. More information on Gateway Intents can be found here:

   - [Gateway Update FAQ](https://support-dev.discord.com/hc/en-us)
   - [Privileged Intents](https://discord.com/developers/docs/topics/gateway#privileged-intents)

5. Lastly, invite the bot to your server using the following link template: [https://discord.com/oauth2/authorize?scope=bot&client_id=APPLICATION_ID_HERE](https://discord.com/oauth2/authorize?scope=bot&client_id=APPLICATION_ID_HERE)

### Create a Discord bot project

1. Run the following commands to bootstrap a Discord bot project in your working directory:

   > Replace `bot-discord` in the commands below with your own preferred project name!

   ```
   git clone https://github.com/SrCrow02/Discord-Bot-V14.git
   ```

   ```
   cd bot-discord
   ```

   ```
   npm i
   ```

2. in config.json put your Token, Bot id and Server ID:

   ```json
     {
       "prefix": "PREFIX",
       "token": "BOT_PREFIX",
       
       "botID": "ID_BOT",
       "serverID": "ID_SERVER", 

       "staff": [
           "YOUR_STAFF"
       ]
    }
   ```

3. Lastly, run the following command to start the bot:

   ```
   node index.js
   ```

   Verify the bot is running properly by sending messages in your server. The bot should log these messages in your terminal. If there are any issues, check [Troubleshooting](#troubleshooting).

You're ready to create your own Discord bot! 🎉

## troubleshooting

- Remove bots in your server that may conflict in functionality, e.g. multiple reaction role bots.
- Use [Git Bash](https://git-scm.com/downloads) instead of the Command Prompt (cmd.exe) if you are on Windows.
- Check that your:
  - `node` version is `>=16.6.0` by running `node -v`.
  - `npm` version is `>=7.0.0` by running `npm -v`.
- If running the application outputs:
  - `Error: Cannot find module '...'`, try running `npm i` in the project directory.
  - `DiscordAPIError: Missing Permissions`, verify your bot has the correct `Manage` permissions.

