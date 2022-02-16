import Router = require('koa-router');

const pageRouter = new Router();

pageRouter.get('/404', async (ctx) => {
  ctx.body = '404';
});

pageRouter.get('/helloworld', async (ctx) => {
  ctx.body = 'Hello World';
});

export { pageRouter };