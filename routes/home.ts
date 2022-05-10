/*
 * @Author: ran
 * @Date: 2022-05-10 17:35:49
 * @LastEditors: ran
 * @LastEditTime: 2022-05-10 17:35:52
 */
import Router from 'koa-router'
const router = new Router()
const { index } = require('../controllers/home.js')
router.get('*', index)
export default router