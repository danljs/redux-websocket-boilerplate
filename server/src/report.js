"use strict"
let fs = require('fs'),
    pdfMakePrinter = require('pdfmake/src/printer');

module.exports = (() => {

  let createPdfBinary = (font_desc, pdfDoc, callback) => {
    var printer = new pdfMakePrinter(font_desc);
    var doc = printer.createPdfKitDocument(pdfDoc);
    var chunks = [];

    doc.on('data', function (chunk) {
      chunks.push(chunk);
    });

    doc.on('end', function () {
      callback(Buffer.concat(chunks));
    });
    doc.end();
  }

  return {
    create: (data, callback) => {
      var font_desc = {
        msyh: {
          normal: 'font/msyh.ttf',
          bold: 'font/msyh.ttf'
        }
      }

      var doc_def = { 
        content: [
          { text: 'Tables', style: 'header' },
          '和This is an sample PDF printed with pdfMake和',
          {
            style: 'tableExample',
            table: {
              body: [
                [
                  { text: 'Column 1', style: 'tableHeader', alignment: 'center' },
                  { text: 'Column 2', style: 'tableHeader', alignment: 'center' },
                  { text: 'Column 3', style: 'tableHeader', alignment: 'center' }
                ],
                ['One value goes here王', 'Another one here王', 'OK王?']
              ]
            }
          },
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10]
          },
          subheader: {
            fontSize: 16,
            bold: true,
            margin: [0, 10, 0, 5]
          },
          tableExample: {
            margin: [0, 5, 0, 15]
          },
          tableHeader: {
            bold: true,
            fontSize: 13,
            color: 'black'
          }
        },
        defaultStyle: {
          font: 'msyh'
        }
      };

      createPdfBinary(font_desc, doc_def, callback)
    }
  }
}())