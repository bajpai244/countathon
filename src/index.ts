import Create_App from "../lib/create_app";
import store from "../lib/store";
import { t_create_app, t_send_next_count } from "../lib/types";

import {
  app_token_1,
  app_token_2,
  app_token_3,
  app_token_4,
  oauth_token_1,
  oauth_token_2,
  oauth_token_3,
  oauth_token_4,
} from "../lib/data";

const bot_1 = new Create_App(app_token_1, oauth_token_1);
const bot_2 = new Create_App(app_token_2, oauth_token_2);
const bot_3 = new Create_App(app_token_3, oauth_token_3);
const bot_4 = new Create_App(app_token_4, oauth_token_4);

const bots = [bot_1, bot_2, bot_3, bot_4];

export const send_next_count: t_send_next_count = () => {
  const count = store.get();

  let bot: t_create_app = bots[0];

  if ((count + 3) % 4 == 0) bot = bots[1];
  if ((count + 2) % 4 == 0) bot = bots[2];
  if ((count + 1) % 4 == 0) bot = bots[3];

  bot.send_count(count);
};

send_next_count();
