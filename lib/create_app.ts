import dotenv from "dotenv";
dotenv.config();

import { App } from "@slack/bolt";
import { WebClient, LogLevel } from "@slack/web-api";

import store from "./store/index";
import { t_create_app } from "../lib/types/index";
import { send_next_count } from "../src";
import sleep from "./sleep";
import { channel, target } from "./data";

export default class Create_App implements t_create_app {
  client: WebClient;
  app: App;

  constructor(app_token: string | undefined, oauth_token: string | undefined) {
    this.client = new WebClient(oauth_token, {
      logLevel: LogLevel.DEBUG,
    });

    this.app = new App({
      token: oauth_token,
      appToken: app_token,
      socketMode: true,
    });

    const start = async () => {
      await this.app.start();
      console.log("⚡️ Bolt app started");
    };

    start();
  }

  async send_count(count: number) {
    await sleep(5);

    try {
      await this.client.chat.postMessage({
        channel: channel ? channel : "",
        text: String(count),
      });
      store.increase();
      if (count + 1 <= target) send_next_count();

      if (count == target)
        await this.client.chat.postMessage({
          channel: channel ? channel : "",
          text: "Yay Done!",
        });
    } catch {
      console.warn("there seems to some issue for count of ", count);
      this.send_count(count);
    }
  }
}
