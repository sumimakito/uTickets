import Koa = require("koa");
import Router = require("koa-router");

import koaJson = require("koa-json");
import koaServe = require("koa-static");
import koaSend = require("koa-send");
import koaMount = require("koa-mount");
import { getTickets } from "./db/db";

const REACT_ROOT = "react/build";
const REACT_PATHS = ["/checkout"];

const react = new Koa();
react.use(koaServe(REACT_ROOT));

const reactRouter = new Router();
REACT_PATHS.map((path) =>
  reactRouter.get(
    path,
    async (ctx) => await koaSend(ctx, `${REACT_ROOT}/index.html`)
  )
);
react.use(reactRouter.routes());
react.use(reactRouter.allowedMethods());

const app = new Koa();
app.use(koaJson({ pretty: false }));
app.use(koaMount("/", react));

const router = new Router();
router.get("/tickets", async (ctx) => {
  ctx.body = getTickets();
});
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000);
