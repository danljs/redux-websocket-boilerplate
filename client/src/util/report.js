export default ((){
  function getData(rowCount) {
    rowCount = rowCount || 4;
    var data = [];
    for (var j = 1; j <= rowCount; j++) {
      var dt = faker.date.past() ;
        data.push({
            date: moment(dt).format('MM/DD/YYYY'),
            name: faker.name.findName(),
            email: faker.internet.email(),
            start: moment(dt).format('HH:mm a'),
            phone: faker.phone.phoneNumber(),
            comment: function(words){
                        words = words || faker.lorem.words(8);
                        var str = faker.helpers.shuffle(words).join(' ').trim();
                        return str.charAt(0).toUpperCase() + str.slice(1);
                      }(faker.lorem.words(6))
        });
    }
    return data;
  }
  return{
    function print(){
      var doc = new jsPDF('p', 'pt', 'letter');
      var pageCount = 0 ;
      var totalPagesExp = "{total_pages_count_string}";
      var page = {
        height: doc.internal.pageSize.height,
        width: doc.internal.pageSize.width,
        margin: {top: 20, right: 20, bottom: 20, left: 20},
        header_height: 20,
        footer_height: 20
      };

      var header = {y: page.margin.top, height: page.header_height};
      var footer = {y: page.height - page.footer_height - page.margin.bottom, height: page.footer_height};
      var body = {y: header.y + header.height, height : footer.y - header.y};

      var table = {
        rowHeight: 30,
        cellPadding: 10,
        columns: [
          {key: 'date', title: 'date', width: 70},
          {key: 'start', title: 'start', width: 70},
          {key: 'name', title: 'name', width: 100},
          {key: 'email', title: 'email', width: 100},
          {key: 'phone', title: 'phone', width: 90},
          {key: 'comment', title: 'comment', width: 150}
        ]
      };
      var fontSize = 8 ;
      doc.setFontSize(fontSize);
      doc.setFont('courier');
      doc.setFontType('normal');

      printHeader();

      var cursor = {x : page.margin.left, y : body.y};

      var data = getData(140);
      printRowHeader();
      data.map(function(e,i){
        printRow(e);
        handlePage();
      });
      printFooter();

      doc.putTotalPages(totalPagesExp);
      doc.save("custom.pdf");

      function getWidth(str){
        return doc.getStringUnitWidth(str) * fontSize ;
      }

      function printOneRow(cells){
        cursor.x = page.margin.left;
        for (var i = 0; i < table.columns.length; i++) {
          var cell = cells[i];
          if (!cell) {continue;}
          var columnWidth = table.columns[i].width ;
          doc.rect(cursor.x, cursor.y, columnWidth, table.rowHeight);
          
          var w = getWidth(cell);
          var textSpace = columnWidth - table.cellPadding * 2;
          cell = doc.splitTextToSize(cell, textSpace + 1, { fontSize: fontSize });
          var splitRegex = /\r\n|\r|\n/g;
          cell = typeof cell === 'string' ? cell.split(splitRegex) : cell;
          // cell.split(splitRegex) ;
          doc.text(cursor.x + table.cellPadding , cursor.y + table.rowHeight / 2, cell);
          cursor.x += columnWidth;
        }
        cursor.y += table.rowHeight;
      }
      
      function printRow(r){
        printOneRow(Object.keys(r).map(function(k){ return r[k]}))
      }

      function printRowHeader(){
        var c = table.columns;
        printOneRow(Object.keys(c).map(function(k){ return c[k].title}));
      }

      function handlePage(){
        if(cursor.y + table.rowHeight >= footer.y){
          printFooter();
          doc.addPage();
          cursor.y = body.y;
          printHeader();
          printRowHeader();
        }
      }

      function printHeader(){
        var projectName = 'ZheJiangLeiSheng';
        var x = page.margin.left ;
        var y = header.y ;

        var str = ++pageCount + " / " + totalPagesExp;
        doc.text(str, x, y);

        str = projectName;
        x = page.width - getWidth(str) - page.margin.right -100;
        doc.text(str, x, y);
      }

      function printFooter(){
        var x = page.margin.left ;
        var y = footer.y ;
        var str ='POWERED BY ';

        doc.text(str, x, y); 
        x += getWidth(str) + 50;
        str ='Great';

        doc.text(str, x, y); 
        x += getWidth(str) + 50;
        str ='Blue';

        doc.text(str, x, y);
      }
    }
  }
}())
