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
    var me = this
    var lang = me.props.lang.keys
    var subs = me.props.subs
    //multi select:
    //http://jsfiddle.net/chirayu45/yxkut/16/
    
    return (
      <select defaultValue='select' onChange={me.props.change}>
        <option value='select' disabled='disabled'>{lang.select}</option>
        {
          subs.map((c,i)=>
            !!!c.sub?
            <option key={i} value={c.price}>{c[lang.item_name]}</option>
            :
            <optgroup key={i} label={c[lang.item_name]}>
              {c.sub.map((s,j)=><option key={j} value={s.price}>{s[lang.item_name]}</option>)}
            </optgroup>
          )
        }
      </select>
    )
  }
}
export default connect(state => ({lang: state.lang}))(quote_cell)