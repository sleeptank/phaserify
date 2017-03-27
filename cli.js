#!/usr/bin/env node 

const path = require('path')
const spawn = require('child_process').spawn

const proj_path = process.cwd()
const base_path = path.resolve(__dirname)

let dest = ''
if (process.argv[2]) {
  dest = process.argv[2]
}

const bundle_path = path.join(proj_path, dest, 'phaser-bundle.js')

const check_for_updates = spawn('npm', ['install'], {cwd: base_path, stdio: 'inherit'})
console.log('Phaserify: Checking for updates...')
check_for_updates.on('close', (code) => {
  if (code !== 0) {
    throw `Phaserify: update error -> code: ${code}`
  } else {
    console.log('Phaserify: Building Phaser bundle...')
    const bundle_phaser = spawn('browserify', ['index.js', '-o', bundle_path], {cwd: base_path, stdio: 'inherit'})
    bundle_phaser.on('close', (code) => {
      if (code !== 0) {
        throw `Phaserify: bundle error -> code: ${code}`
      } else {
        console.log('Phaserify: Bundle complete. Pew-pew!')
      }
    })
  }
})
