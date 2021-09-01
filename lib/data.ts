export const is_prod = process.env.PROD == "true";

export const target = 1000000;

export const channel: string | undefined = is_prod
  ? process.env.PROD_CHANNEL
  : process.env.DEV_CHANNEL;

export const oauth_token_1 = process.env.OAUTH_TOKEN_1;
export const app_token_1 = process.env.APP_TOKEN_1;

export const oauth_token_2 = process.env.OAUTH_TOKEN_2;
export const app_token_2 = process.env.APP_TOKEN_2;

export const oauth_token_3 = process.env.OAUTH_TOKEN_3;
export const app_token_3 = process.env.APP_TOKEN_3;

export const oauth_token_4 = process.env.OAUTH_TOKEN_4;
export const app_token_4 = process.env.APP_TOKEN_4;
