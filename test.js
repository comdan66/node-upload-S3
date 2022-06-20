/**
 * @author      OA Wu <oawu.tw@gmail.com>
 * @copyright   Copyright (c) 2015 - 2022, @oawu/uploader
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

const Uploader = require('./index.js')
const destDir = __dirname + '/dist'

const s3 = Uploader.S3({
  bucket: '',
  access: '',
  secret: '',

  destDir: destDir,

  isDisplay: true,
})

s3.put(e => {

  const s3 = Uploader.GitHub({
    account: '',
    repository: '',
    destDir: destDir,
    isDisplay: true,
    prefix: '',
    ignoreNames: [],
    ignoreExts: [],
    ignoreDirs: []
  })

  s3.put(e => {
    e ? console.error(e) : console.error('ok')
    process.exit()
  })
})



