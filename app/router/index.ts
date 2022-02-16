import Router = require('koa-router');
import { homeRouter } from './home';
import { pageRouter } from './page';

const router = new Router();

router.use('/', homeRouter.routes(), homeRouter.allowedMethods());
router.use('/page', pageRouter.routes(), pageRouter.allowedMethods());


export { router };