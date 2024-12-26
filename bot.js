const { Telegraf } = require("telegraf");

// Replace with your BotFather API token
const BOT_TOKEN = "7656508773:AAE1GawfI6VQBHmto8l3U9bp_A_fhSoBSMk";
const APP_URL = "https://youtube-short-clone-a.vercel.app";

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  const username = ctx.from.username || "User";
  const launchUrl = `${APP_URL}?start=${ctx.from.id}`;

  ctx.reply(
    `Hello, ${username}! 👋\n\nClick the link below to launch the app:\n${launchUrl}`,
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Open App 🚀",
              url: launchUrl,
            },
          ],
        ],
      },
    }
  );
});

bot.help((ctx) => {
  ctx.reply("Send /start to launch the app.");
});

// Start the bot
bot.launch();
console.log("Bot is running...");

// Graceful shutdown for deployment
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
