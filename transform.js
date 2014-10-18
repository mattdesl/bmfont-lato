#!/usr/bin/env node
var concat = require('concat-stream')
var image = require('./image')

var write = concat(function(body) {
    process.stdout.write(body)
    process.stdout.write('\nmodule.exports.images = [ require("./image").transpose(1, 0, 2) ];')
})

process.stdin.pipe(write)