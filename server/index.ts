import express, { Request, Response } from 'express';
import next from 'next';
import path from 'path';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
    try {
        await app.prepare();
        const server = express();
        server.get('/build/:id', (req: Request, res: Response) => {
            const file = path.join(__dirname, `../docs/styleguide/build/${req.params.id}`);
            res.status(200).sendFile(file);
        });
        server.all('*', (req: Request, res: Response) => {
            return handle(req, res);
        });
        server.listen(port, (err?: any) => {
            if (err) throw err;
            console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV || 'DEV'}`);
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();