import { z } from "zod";
import dotenv from "dotenv";

const envFound = dotenv.config();
if (envFound.error) throw new Error("⚠️  Couldn't find .env file  ⚠️");

const EnvSchema = z.object({
  TELEGRAM_MENU_MAKER_NODE_ENV: z
    .enum(["DEV", "PROD"], {
      description: "This gets updated depending on your environment",
    })
    .default("DEV"),
  TELEGRAM_MENU_MAKER_TELEGRAM_TOKEN: z
    .string({
      description: "Telegram token id",
      required_error: "Missing env TELEGRAM_MENU_MAKER_TELEGRAM_TOKEN",
    })
    .min(1),
  TELEGRAM_MENU_MAKER_TELEGRAM_TOKEN_DEV: z
    .string({
      description: "Telegram token dev id",
      required_error: "Missing env TELEGRAM_MENU_MAKER_TELEGRAM_TOKEN",
    })
    .min(1),
  TELEGRAM_MENU_MAKER_TELEGRAM_ADMIN_ID: z
    .string({
      description: "Telegram admin id",
      required_error: "Missing env TELEGRAM_MENU_MAKER_TELEGRAM_TOKEN",
    })
    .min(1),
});

console.log("process.env", process.env);
export const ENV = EnvSchema.parse(process.env);
