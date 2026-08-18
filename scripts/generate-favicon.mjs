import fs from 'node:fs'
import path from 'node:path'
import opentype from 'opentype.js'

const root = process.cwd()
const fontData = fs.readFileSync(path.join(
  root,
  'Rubik_Puddles,Slackside_One/Slackside_One/SlacksideOne-Regular.ttf',
))
const font = opentype.parse(fontData.buffer.slice(
  fontData.byteOffset,
  fontData.byteOffset + fontData.byteLength,
))
const size = 128
const fontSize = 112
const initial = font.getPath('S', 0, 0, fontSize)
const bounds = initial.getBoundingBox()
const x = (size - (bounds.x2 - bounds.x1)) / 2 - bounds.x1
const y = (size - (bounds.y2 - bounds.y1)) / 2 - bounds.y1
const letter = font.getPath('S', x, y, fontSize)
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}"><path fill="#005F9D" d="${letter.toPathData(2)}"/></svg>\n`

fs.mkdirSync(path.join(root, 'public'), { recursive: true })
fs.writeFileSync(path.join(root, 'public/favicon.svg'), svg)
