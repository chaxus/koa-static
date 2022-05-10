/*
 * @Author: ran
 * @Date: 2022-05-10 17:36:33
 * @LastEditors: ran
 * @LastEditTime: 2022-05-10 17:37:45
 */
const fs = require('fs')
import Application from 'koa'
module.exports = (app:Application) => {
    fs.readdirSync(__dirname).forEach((file: string) => {
        if (file === 'index.js') {
            return
        }
        const router = require(`./${file}`)
        app.use(router.routes()).use(router.allowedMethods())
    })
}

