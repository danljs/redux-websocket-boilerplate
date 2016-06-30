"use strict"
let fs = require('fs'),
    pdfMakePrinter = require('pdfmake/src/printer');

module.exports = (() => {

  let createPdfBinary = (font_desc, pdfDoc, callback) => {
    let printer = new pdfMakePrinter(font_desc)
    let doc = printer.createPdfKitDocument(pdfDoc)
    let chunks = []
    doc.on('data', chunk => chunks.push(chunk))
    doc.on('end', () => callback(Buffer.concat(chunks)))
    doc.end();
  }

  return {
    create: (data, callback) => {
      let font_desc = {
        msyh: {
          normal: 'font/msyh.ttf',
          bold: 'font/msyh.ttf'
        }
      }

      let doc_def = require('./report_def')

      createPdfBinary(font_desc, doc_def, callback)
    }
  }
})()