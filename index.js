require("dotenv").config();
const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const token = process.env.LOGIN_TOKEN;

client.on("bot is active", () => {
  console.log(`bot is ready as ${client.user.tag}!`);
}); 

const web = new EmbedBuilder()
  .setAuthor({
    name: "AINCRAD LATAM",
  })
  .setTitle("Web Aincrad Network")
  .setURL("https://www.aincradlatam.net/")
  .setDescription("Sitio oficial de Aincrad Latam Network");

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand) return;
  const { commandName } = interaction;
  if (commandName === "ping") {
    await interaction.reply("Pong! trolleado");
  }

  if (commandName === "veloren") {
    await interaction.reply(
      "Veloren: veloren.aincradlatam.net"
    );
  }
  if (commandName === "minecraft") {
    await interaction.reply(
      "Minecraft: minecraft.aincradlatam.net"
    );
  }
  if (commandName === "web") {
    await interaction.reply({ embeds: [web] });
  }
});
client.login(token);
