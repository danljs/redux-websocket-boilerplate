'use strict';
const PdfMakePrinter = require('pdfmake/src/printer');

module.exports = (() => {
  const createPdfBinary = (font_desc, pdfDoc, callback) => {
    const printer = new PdfMakePrinter(font_desc);
    const doc = printer.createPdfKitDocument(pdfDoc);
    const chunks = [];
    doc.on('data', chunk => chunks.push(chunk));
    doc.on('end', () => callback(Buffer.concat(chunks)));
    doc.end();
  };

  return {
    create: (data, callback) => {
      const font_desc = {
        msyh: {
          normal: 'font/msyh.ttf',
          bold: 'font/msyh.ttf',
        },
      };

      const doc_def = {};
      createPdfBinary(font_desc, doc_def, callback);
    },
  };
})();
