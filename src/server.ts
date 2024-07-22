import app from "./app";
import http from "http";
import config from "./config/config";

const server = http.createServer(app);
const PORT = config.server.PORT;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
