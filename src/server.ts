import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core'
import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app.server.module.ngfactory';
import * as express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

const PORT = 4000;

enableProdMode();

const app = express();

let template = readFileSync(join(__dirname, '..', 'dist', 'index.html')).toString();

app.engine('html', (_, options, callback) => {
  const opts = { document: template, url: options.req.url };

  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'src')

app.get('*.*', express.static(join(__dirname, '..', 'dist')));

// TODO: implement data requests securely
app.get('/api/*', (req, res) => {
  res.status(200).send('data requests are not supported');
});

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});


