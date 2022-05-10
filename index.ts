/*
 * @Author: ran
 * @Date: 2021-03-13 16:14:45
 * @LastEditors: ran
 * @LastEditTime: 2022-05-10 17:38:43
 */
import Koa from "koa";
import Router from 'koa-router'
import koaStatic from "koa-static";
import compress  from "koa-compress"
import * as path from "path";
import * as  fs from 'fs'
const app = new Koa();

app.use(compress());
app.use(koaStatic(path.resolve(__dirname,"./dist")));
// const router = koaRouter();

// router.get("/",(ctx,next)=>{
//     // ctx.type="html",
//     ctx.redirect('/index.html');
//     // ctx.body=fs.readFileSync(path.resolve('./dist/index.html'),'utf-8')  
// });

// app.use(router.routes()).use(router.allowedMethods());

app.listen(30110,()=>{
    console.log("server run on  localhost:30110");
})