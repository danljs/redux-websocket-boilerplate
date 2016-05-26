'use strict'
import React from 'react'
import { connect } from 'react-redux'
export default (()=>{
  return{
    print : function(){
      var doc = new jsPDF();
      doc.text(20, 20, 'Hello world!');
      doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
      doc.addPage();
      doc.text(20, 20, 'Do you like that?');
      doc.save('report.pdf');
    }
  }
}())