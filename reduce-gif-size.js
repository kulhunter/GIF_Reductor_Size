{\rtf1\ansi\ansicpg1252\cocoartf2708
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11540\viewh16080\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const GIFEncoder = require('gifencoder');\
const GIFDecoder = require('gif-stream/decoder');\
const GIFEncoderAsync = require('gif-encoder-async');\
const GIFDecoderAsync = require('gif-decoder-async');\
const GIFLossy = require('giflossy');\
\
async function reduceGIFSize(gifData) \{\
  const decoder = new GIFDecoderAsync();\
  const encoder = new GIFEncoderAsync();\
  const lossy = new GIFLossy();\
  const encoderStream = encoder.createWriteStream();\
  const lossyStream = lossy.createWriteStream();\
  const outputStream = new Promise((resolve) => \{\
    const chunks = [];\
    encoderStream.on('data', (chunk) => chunks.push(chunk));\
    encoderStream.on('end', () => resolve(Buffer.concat(chunks)));\
  \});\
  const inputBuffer = Buffer\
}