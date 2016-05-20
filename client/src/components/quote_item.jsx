'use strict'
import React from 'react'
import { connect } from 'react-redux'
class quote_item extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
  }

  render() {
    var me = this
    var lang = me.props.lang.keys
    return (
      <div className='quote-item'>
      {
        me.props.category.map((c,i)=>
          <select key={i} onChange={e=>{
            me.props.sum(5)
          }}>
            {c.sub.map((s,j)=><option key={j}>{s[lang.item_name]}</option>)}
          </select>
        )
      }
      </div>
    )
  }
}
export default connect(state => ({lang: state.lang}))(quote_item)