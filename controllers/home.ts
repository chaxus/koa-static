/*
 * @Author: ran
 * @Date: 2021-03-13 16:14:45
 * @LastEditors: ran
 * @LastEditTime: 2022-05-10 17:33:29
 */
import * as  fs from 'fs'
import * as path from "path";
import { Context } from 'koa'
class HomeCtl {
    index(ctx:Context) {
        ctx.type = 'text/html;charset=utf-8'
        ctx.type = 'application/javascript;charset=utf-8'
        ctx.body = fs.readFileSync(path.resolve('../dist/index.html'), 'utf-8')
        // ctx.body = "这就是主页"
    }
}
export default new HomeCtl()