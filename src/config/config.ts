import dotenv from "dotenv";

dotenv.config();

const config = {
  server: {
    PORT: process.env.PORT,
    HOSTNAME: "",
    BACKLOG: "",
  },
  db: {
    URI: "",
  },
};

export default config;
