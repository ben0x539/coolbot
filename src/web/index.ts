import PouchDB from 'pouchdb';
import express from 'express';

const app = express();

app.use(
  '/db',
  require('express-pouchdb')(
    PouchDB.defaults({
      prefix: './database/',
    }),
  ),
);

app.get('/', async (req: any, res: any) => {
  res.send('home');
});

export default app;
