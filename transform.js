#!/usr/bin/env node
var concat = require('concat-stream')
var image = require('./image')

var write = concat(function(body) {
    process.stdout.write(body)
    process.stdout.write('\nmodule.exports.images = [ require("./image") ];')
})

process.stdin.pipe(write)