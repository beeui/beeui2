const fs = require('fs')
// 默认指向测试环境
const env = process.env.NODE_ENV || 'test'
fs.writeFileSync('src/env.js', `module.exports = '${env}'\n`)
