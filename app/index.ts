import Koa = require('koa');
import { router } from './router';

const app = new Koa();

app.use(router.routes()).use(router.allowedMethods());

app.listen(9595);