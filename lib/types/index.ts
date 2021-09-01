import { App } from "@slack/bolt";
import { WebClient } from "@slack/web-api";

export interface t_create_app {
  client: WebClient;
  app: App;
  send_count(count: number): void;
}

export interface t_store {
  increase(): void;
  get(): number;
}

export type t_send_next_count = () => void;

export type t_sleep = (s: number) => Promise<void>;
