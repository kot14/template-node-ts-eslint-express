declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT: string;
      DB_HOST: string;
      DB_PORT: number;
    }
  }
}

export {};
