require("dotenv").config();
const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const token = process.env.LOGIN_TOKEN;

client.on("bot is active", () => {
  console.log(`bot is ready as ${client.user.tag}!`);
}); 

const web = new EmbedBuilder()
  .setAuthor({
    name: "AINTECH ONLINE",
  })
  .setTitle("Web Aintech Online")
  .setURL("https://aintech.online/")
  .setDescription("Sitio oficial de Aintech Online, obten promociones, ofertas y juegos gratis!")
  .setColor("White");


client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand) return;
  const { commandName } = interaction;
  if (commandName === "ping") {
    await interaction.reply('Pong');
  }
  if (commandName === "web" || "sitio") {
    await interaction.reply({ embeds: [web] });
  }
});
client.login(token);
