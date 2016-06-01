'use strict'
import React from 'react'
import { connect } from 'react-redux'
class quote_cell extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    var lang = this.props.lang.keys
    var subs = this.props.subs
    //multi select:
    //http://jsfiddle.net/chirayu45/yxkut/16/
    
    return (
      <select defaultValue='select' onChange={e=>{
        // console.log(e.target.value)
        let value = e.target.value.split(':')
        this.props.change({price : value[0], item_name : value[1]})
      }}>
        <option value='select' disabled='disabled'>{lang.select}</option>
        {
          subs.map((c,i)=>
            !!!c.sub ?
            <option key={i} value={c.price + ':' + c[lang.item_name]}>{c[lang.item_name]}</option>
            :
            <optgroup key={i} label={c[lang.item_name]}>
              {c.sub.map((s,j)=><option key={j} value={s.price + ':' + s[lang.item_name]}>{s[lang.item_name]}</option>)}
            </optgroup>
          )
        }
      </select>
    )
  }
}
export default connect(state => ({lang: state.lang}))(quote_cell)