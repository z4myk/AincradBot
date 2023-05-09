require('dotenv').config();
//requerir clases
const {SlashCommandBuilder, Routes} = require('discord.js');
//requerir rest para enviar peticiones a la api de discord
const {REST} = require('@discordjs/rest')

const BOT_ID = process.env.BOT_ID;
const SERVER_ID = process.env.SERVER_ID;
const token = process.env.LOGIN_TOKEN;

const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Pong!'),
    new SlashCommandBuilder().setName('web').setDescription('Sitio oficial de Aintech Online'),
].map(command => command.toJSON())



const rest = new REST({version: '10',}).setToken(token);


const deployCommand = async() => {
    try{
        await rest.put(Routes.applicationCommands(BOT_ID, SERVER_ID),{
            body: commands
        })
        console.log('los comandos se desplegaron correctamente')
    }catch(err){
        console.log(err)
    }
}
deployCommand()