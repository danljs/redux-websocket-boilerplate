"use strict"

module.exports = (() => {
  return {
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
  }
})()