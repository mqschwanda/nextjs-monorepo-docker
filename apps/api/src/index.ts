import { createServer } from "./server";
import logger from "logger";

const port = process.env.PORT || 3001;
const server = createServer();

server.listen(port, () => {
  logger(`api running on ${port}`);
});
