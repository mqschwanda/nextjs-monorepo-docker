import logger from '@mqs/logger';
import createServer from './server';

const port = process.env.PORT || 3001;
const server = createServer();

server.listen(port, () => {
  logger.log({
    db: false,
    message: `api running on ${port}`,
  });
});
