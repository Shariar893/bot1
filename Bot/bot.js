const { Telegraf } = require("telegraf");
const TOKEN = "7172150163:AAFFFSNZQZhkKkchT5GNqgRxt5fbDtW7qKQ";
const bot = new Telegraf(TOKEN);

const web_link = "https://bot1-jade.vercel.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
