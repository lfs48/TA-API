import 'module-alias/register';
import express from 'express';
import { createServer } from 'node:http';
import router from './routes';
import setupSocketIO from '@/sockets';

const PORT = process.env.PORT || 3000;

const app = express();
app.use([
    express.json(),
    express.urlencoded({ extended: true }),
    router,
]);
const server = createServer(app);
setupSocketIO(server);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});