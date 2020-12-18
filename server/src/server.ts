import express from 'express';
import { json } from 'body-parser';
import connectDatabase from './database';
import { PORT } from './constants/configs/server';

export default async () => {
    try {
        await connectDatabase();
        console.log('Database connected successfull!');
    } catch (error) {
        console.error(`Database connection failed: ${error.message}`);
        process.exit(1);
    }

    const app = express();
    app.use(json());

    app.get('/', (req, res) => res.send('Welcome to webmp4v2 server!'))

    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
};
